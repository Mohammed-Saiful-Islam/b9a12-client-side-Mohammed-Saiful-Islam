import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import PetCategory from "../../PetCategory/PetCategory";
import CallToAction from "../../CallToAction/CallToAction";

const Home = () => {
    return (
        <div>
<Helmet>
        <title>Pet Adoption | Home</title>    
      </Helmet>
            <Banner/>
            <PetCategory/>
            <CallToAction/>
            <CallUs/>
        </div>
    );
};

export default Home;