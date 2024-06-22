import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useDonationCampaigns from "../../hooks/useDonationCampaigns";
import DonationCampaignDetails from "../DonationCamaignDetails/DonationCampaignDetails";

const DonationCampaigns = () => {
    const[donationCampaigns]=useDonationCampaigns();
    return (
        <div className="py-24 lg:py-32 flex flex-col items-center text-center">
<h2 className='text-2xl'>Donation Campaigns {donationCampaigns.length} </h2>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {donationCampaigns.map((donationCampaign) => (
          <DonationCampaignDetails key={donationCampaign._id} donationCampaign={donationCampaign} />
        ))}
      </div>           
        </div>
    );
};

export default DonationCampaigns;