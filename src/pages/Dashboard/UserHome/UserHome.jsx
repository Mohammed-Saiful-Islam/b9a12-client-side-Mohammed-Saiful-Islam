import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const{user}=useAuth();
    return (
        <div>
<h2 className="text-2xl">
    <span>Hi, Welcome</span>
    {
        user?.displayName?user.displayName:'Back'
    }
    </h2>            
    <img src={user?.photoURL} alt="profile pic" />
        </div>
    );
};

export default UserHome;