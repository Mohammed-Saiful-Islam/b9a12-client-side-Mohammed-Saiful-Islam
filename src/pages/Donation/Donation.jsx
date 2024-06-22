import Swal from "sweetalert2";
import useDonation from "../../hooks/useDonation";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Donation = () => {


    const[donations,refetch]=useDonation();
    const totalDonation=donations.reduce((total,donation)=>total+donation.donationAmount,0);
    const axiosSecure=useAxiosSecure();


    return (
        <div className="py-24 lg:py-32 flex flex-col items-center text-center">
<h2>Total Donation: {totalDonation}</h2>            
        </div>
    );
};

export default Donation;