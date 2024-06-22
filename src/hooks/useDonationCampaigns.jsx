import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDonationCampaigns = () => {
    const axiosPublic=useAxiosPublic();

const{data:donationCampaigns=[],isPending:loading,refetch}=useQuery({
    queryKey:['donationCampaigns'],
    queryFn: async()=>{
const res=await axiosPublic.get('/donationCampaigns');
return res.data;
    }
})

return[donationCampaigns,loading,refetch]
};

export default useDonationCampaigns;