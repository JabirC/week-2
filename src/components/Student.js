import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css"

function Student(props){
    return(
        <>
        <div className="task_container">
            <div className="task_title"> Task: Create Website</div>
            <div className="task_owner"> Owner: Michael Smith</div>
            <div className="Due_date">Due: July 29th, 2022</div>
            <div>In Progress</div>
        </div>
        </>
    )
}

export default Student;