import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm1 from "../Dashboard/Payment/CheckoutForm1";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonation from "../../hooks/useDonation";
import Swal from "sweetalert2";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const ShowDonationCampaignDetails = () => {
    const { _id, name, image, maximum_donation_amount } = useLoaderData() || {};


    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();
    const[,refetch]=useDonation();


    const { user } = useAuth();
    const [modalDonationAmount, setModalDonationAmount] = useState('');


    const minDonationAmount = maximum_donation_amount * 0.01;


    // Create donationDetails object
    const donationDetails = {
        donationId: _id,
        email: user.email,
        name,
        image,
        donationAmount: parseFloat(modalDonationAmount)
    };


    const handleDonation = () => {
        if (user && user.email) {
            if (modalDonationAmount > maximum_donation_amount || modalDonationAmount < minDonationAmount) {
                alert(`Donation amount should be between ${minDonationAmount} and ${maximum_donation_amount}`);
                return;
            }else{
                axiosSecure.post('/donations',donationDetails)
                .then(res=>{
                  console.log(res.data)
                  if (res.data.insertedId) {
                    // Swal.fire({
                    //   position: "top-end",
                    //   icon: "success",
                    //   title: `donation details for ${name} added to the  database`,
                    //   showConfirmButton: false,
                    //   timer: 2500
                    // });
                    // refetch cart to update the cart items count
                    refetch();
                    // navigate('/dashboard/payment1')
                    // navigate('/dashboard/donation')
                  }
                })                
            }
            console.log(donationDetails);
        }
    };

    const handleModalChange = (e) => {
        setModalDonationAmount(e.target.value);
    };

    return (
        <div className="py-24 lg:py-32 flex flex-col items-center text-center">
            {/* Your existing component code for showing donation campaign details */}
            <input type="number" value={modalDonationAmount} onChange={handleModalChange} />
            <button onClick={handleDonation}>Donate and Pay Now</button>
            {donationDetails && (
                <Elements stripe={stripePromise}>
                    <CheckoutForm1 donationDetails={donationDetails} />
                </Elements>
            )}
        </div>
    );
};

export default ShowDonationCampaignDetails;
