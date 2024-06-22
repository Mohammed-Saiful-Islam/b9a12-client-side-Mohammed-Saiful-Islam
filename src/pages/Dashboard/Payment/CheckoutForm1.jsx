import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useDonation from "../../../hooks/useDonation";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const[error,setError]=useState('');
    const[clientSecret,setClientSecrect]=useState('');
    const[transactionId,setTransactionId]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    const{user}=useAuth();
    const[donations,refetch]=useDonation();
    const navigate=useNavigate();

    const totalDonation=donations.reduce((total,donation)=>total+donation.donationAmount,0)
console.log(totalDonation);
    useEffect(()=>{
if (totalDonation>0) {
  axiosSecure.post('/create-payment-intent',{price:totalDonation})
.then(res=>{
    console.log(res.data.clientSecret);
    setClientSecrect(res.data.clientSecret);
})
}
    },[axiosSecure,totalDonation])

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if (!stripe||!elements) {
            return
        }

        const card=elements.getElement(CardElement)

        if (card===null) {
            return
        }

        const{error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if (error) {
console.log('payment error',error);
setError(error.message);        
        }
        else{
            console.log('payment method',paymentMethod);
            setError('');
        }

        // confirm payment
        const{paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              email:user?.email||'anonymous',
              name:user?.displayName||'anonymous'
            }
          }
        })

        if (confirmError) {
          console.log('confirm error')
        } else {
          console.log('payment intent', paymentIntent)
          if (paymentIntent.status==='succeeded') {
            console.log('transaction id',paymentIntent.id);
            setTransactionId(paymentIntent.id);

            // now save the payment in the database
            const payment={
              email:user.email,
              price:totalDonation,
              transactionId:paymentIntent.id,
              date:new Date(), //utc date convert. use moment js to
              cartIds:donations.map(item=>item._id),
              menuItemIds: donations.map(item=>item.menuId),
              status:'pending'
            }

            const res=await axiosSecure.post('/payments',payment);
            console.log('payment saved',res.data);
            refetch();
            if (res.data?.paymentResult?.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for the taka paisa",
                showConfirmButton: false,
                timer: 2500
              });
              navigate('/dashboard/paymentHistory')              
            }

          }
        }

    }

    return (
<form className="space-y-4" onSubmit={handleSubmit}>
<CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary" type="submit" disabled={!stripe||!clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId&&<p className="text-green-600">Your transaction id:{transactionId}</p>}
</form>
    );
};

export default CheckoutForm;