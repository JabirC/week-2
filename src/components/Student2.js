import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css"

function Student2(props){
    return(
        <>
        <div className="task_container">
            <div className="task_title"> Task: Create App</div>
            <div className="task_owner"> Owner: Amy Smith</div>
            <div className="Due_date">Due: August 19th, 2022</div>
            <button>Claim</button>
            <div>In Progress</div>
        </div>
        </>
    )
}

export default Student2;