import React from 'react'
import pic from "../Images/computers.svg";
import Common from './Common';
const About = () => {
    return (
        <>
        <Common name='About Us' 
        imgsrc={pic} visit="/contact" 
        content='NerdWare is a Professional Services Platform. Here we will provide you only interesting content, 
        which you will like very much. We are dedicated to providing you the best of Services, with a focus on dependability and 
        Software Development. We are working to turn our passion for Services into a booming online website. We hope you enjoy 
        our Services as much as we enjoy offering them to you.
        I will keep posting more important posts on my Website for all of you. Please give your support and love.'
        btname="Contact Now"/>
        </>
    );
};

export default About;