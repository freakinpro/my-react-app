import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import "../Styles/index.css";
import pic from "../Images/computers.svg";

const Home = () => {
    return (
        <>
        <Common name='Make it Real With' 
        imgsrc={pic} visit="/services" 
        content='We are a team of Nerds doing Nerdy Business'
        btname="Get Started"/>
        </>
    );
};

export default Home;

