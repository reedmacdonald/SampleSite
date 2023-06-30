import './styles.css'
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const PageOne = () => {
    const [isRed, setIsRed] = React.useState(false);
    const navigate = useNavigate();
    return (
        <div className="PageOne">
        <h1>PageOne</h1>
        <div class={`box blue ${isRed?'red':null}`}></div>
        <br/>
        <button onClick={()=>setIsRed(!isRed)}>Toggle Red</button>
        <br/>
        <button onClick={()=>navigate('/page-two')}>Next Page</button>
        </div>
    );
};