import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {

    const{user}=useAuth();

    return (
        <div>
<h2 className="text-2xl">
    <span>Hi,Welcome</span>
    {user?.displayName?user.displayName:'Back'}
    <img src={user?.photoURL} alt="Profile Pic" />
    </h2> 
        </div>
    );
};

export default AdminHome;