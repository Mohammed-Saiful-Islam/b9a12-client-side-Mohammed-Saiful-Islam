import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const PetDetails = ({pet}) => {
    const{name,category,image,age,location_name,location_link,_id}=pet;
    return (
        <div>
<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Category: {category}</span>
		<h2 className="text-xl font-semibold tracking-wide">Name: {name}</h2>
		<p className="dark:text-gray-800">Age: {age}</p>
	<p className="dark:text-gray-800"></p><Link target="_blank" to={location_link}>Location: {location_name}</Link>
	</div>
	
	<Link to={`/showPetDetails/${_id}`}>
<button  className="btn btn-ghost btn-xs bg-orange-600"><FcViewDetails />Show Detail</button>
</Link>
</div>
          
        </div>
    );
};

export default PetDetails;