import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ShowPetDetails = () => {
  const axiosPublic=useAxiosPublic();
  const axiosSecure=useAxiosSecure();
  const { user } = useContext(AuthContext);
  console.log(typeof user?.displayName); // First console log
  console.log(user?.email); // Second console log
  const { name, image, age, category, _id } = useLoaderData() || {};
  console.log(name, image, age, category, _id); // Third console log

  const { register, handleSubmit, reset,formState:{errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data.name, data.email, data.phone, data.address); // Fourth console log


    const adoptInfo={
      name:data?.name,
      email:data?.email,
      phone:data?.phone,
      adderess:data?.address
    }
    axiosSecure.post('/adopt',adoptInfo)
    .then(res=>{
      if (res.data.insertedId) {
        console.log('adoption request sent to the database')
        reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "adoption request sent  successfully.",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/petList')   
      }
    })


    // Close the modal after form submission
    document.getElementById('my_modal_5').close();
  }

  return (
    <div className="py-24 lg:py-32 flex flex-col items-center text-center">
      <img src={image} alt="" />
      <div className="flex-col text-center">
        <div>
          <h2>Pet Age: {age}</h2>
          <h2>Pet Category: {category}</h2>
          <h2>Pet Name: {name}</h2>
        </div>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h2>Category: {category}</h2>
              <h3 className="font-bold text-lg">Name: {name}</h3>
              <p className="py-4">Id: {_id}</p>
              <img className="" src={image} alt="" />
              <div className="modal-action">
                <form id="adoptForm" onSubmit={handleSubmit(onSubmit)} method="dialog">
                  <div>
                    <input type="hidden" {...register("name")} defaultValue={user?.displayName} />
                    <label className="input input-bordered flex items-center gap-2">
                      <FaUser /> User Name:
                      <input type="text" className="grow" defaultValue={user?.displayName} disabled />
                    </label>
                    <input type="hidden" {...register("email")} defaultValue={user?.email} />
                    <label className="input input-bordered flex items-center gap-2">
                      <MdEmail /> Email:
                      <input defaultValue={user?.email} disabled type="email" className="grow"  />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <BsFillTelephoneFill /> Phone Number:
                       <input type="tel" className="grow" placeholder="+1234567890" {...register("phone", { required: true })} />
                    </label>
                    {errors.phone && <span className="text-red-600">phone number is required</span>}
                    <label className="input input-bordered flex items-center gap-2">
                      <FaAddressCard /> Address:
                      <input type="text" className="grow" placeholder="Apartment,House,Street,District,State" {...register("address", { required: true })} />
                    </label>
                    {errors.address && <span className="text-red-600">phone number is required</span>}
                  </div>
                  <input className="btn" type="submit" value="Submit" />
                </form>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ShowPetDetails;
