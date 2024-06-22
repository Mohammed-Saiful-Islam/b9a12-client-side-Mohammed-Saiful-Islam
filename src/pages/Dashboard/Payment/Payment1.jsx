import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm1 from "./CheckoutForm1";


// TODO: add publishable key
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
<SectionTitle heading={'Payment'} subHeading={'Please pay to eat'}/>     
<div>
<Elements stripe={stripePromise}>
<CheckoutForm1/>    
    </Elements>    
</div>
        </div>
    );
};

export default Payment;