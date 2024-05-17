import React from "react";
import propic from "@/public/images/propic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";
import Education from "./education";
import Contact from "./contact";

export default function LeftContents(){

    const personalData = getPersonalData();
    return(
        <div className="w-1/4  p-4 bg-black-500 text-white">
            <Image src={propic} alt="Profile Picture" quality={100}/>
            <hr></hr>
            {/* <h1 className="text-4xl font-bold">Left Section</h1> */}

            <Education/>
            <Contact/>
     
            <p>This is the left section content.</p>
        </div>
    )
}