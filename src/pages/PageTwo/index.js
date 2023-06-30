import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const PageTwo = () => {
    const navigate = useNavigate();
    return (
        <div className="PageTwo">
        <h1>PageTwo</h1>
        <div class='brown box'/>
        <br/>
        <button onClick={()=>navigate('/page-three')}>Next Page</button>
        <br/>
        <br/>
        <button onClick={()=>navigate('/page-one')}>Previous Page</button>
        </div>
    );
};