import React, { useEffect, useState } from "react";
import "./Profile.css"
import { auth, db, logout } from "../firebase";

function Profile(props){
    return(
        <div className="profile_container">
            <div>{props.uname}</div>
            <div>{props.urole}</div>
            <button className="log_out" onClick={logout}>
                   Logout
         </button>
        </div>
    )
}

export default Profile;