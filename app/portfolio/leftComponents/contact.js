import React from "react";
import propic from "@/public/images/propic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";

export default function Contact(){

    const educations = getPersonalData().contact;

    return(
        <div>
            <h1 className="text-4xl font-bold mt-2">Contact</h1><br></br>
        <div>
            <ul>
                {
                    educations.map(e => (
                        <div>
                            <p className="text-xs font-light" key={e}> {e} </p>
                        </div>

                    ))
                }
            </ul>
            <br></br>

        </div>
        </div>
        
    )
}