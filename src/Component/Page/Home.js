import React from "react";
import Banner from '../Template/Banner'
import Experts from "../Template/Experts";
import NewsLetter from "../Template/NewsLetter";

import Doc from "../Template/Doc";
import Contact from "../Template/Contact"


export default function ContactUs(){
    return(
        <>
            <Banner/>
            <Experts/>
            <NewsLetter/>
            
            
            <Doc/>
            <Contact/>
        </>
    )
}