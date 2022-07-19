import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Student from "./Student";
import Student2 from "./Student2";
import Profile from "./Profile";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [dash, setDash] = useState('dashboard');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setRole(data.role);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

    if(dash === 'dashboard'){
        return (
            <>
            <div className="dashboard">
            <Profile uname={name} urole={role}/>
                <div className="nav_bar">
                   <button className="dash_button" onClick={() => setDash('dashboard')}>Dashboard</button>
                   <button className="explore_button" onClick={() => setDash('amy')}>Explore</button>
                </div>
               <div className="dashboard__container">
                 {/* <div>{user?.email}</div> */}
                 <Student userID="hklB8OdQc6Xw2NdU3dh6fvBDkZ23"/>
               </div>
            </div>
             
             </>
          );
    }
    else{
        return (
            <>
            <div className="dashboard">
            <Profile uname={name} urole={role}/>
                <div className="nav_bar">
                   <button className="dash_button">Dashboard</button>
                   <button className="explore_button">Explore</button>
                </div>
               <div className="dashboard__container">
                 {/* <div>{user?.email}</div> */}
                 <Student userID="hklB8OdQc6Xw2NdU3dh6fvBDkZ23"/>
               </div>
            </div>
             
             </>
          );
    }
}
export default Dashboard;