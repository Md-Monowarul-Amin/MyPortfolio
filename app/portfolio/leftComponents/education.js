import React from "react";
import propic from "@/public/images/propic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";

export default function Education(){

    const educations = getPersonalData().education;

    return(
        <div>
            <h1 className="text-4xl font-bold mt-2">Education</h1><br></br>
        <div>
            <ul>
                {
                    educations.map(e => (
                        <div>
                            <p className="text-xl font-bold" key={e.name}> {e.name} </p>
                            <p className="text-base " key={e.Degree}> {e.Degree} </p>
                            <p className="text-xs font-light" key={e.Duration}> {e.Duration} </p>
                            <br></br>
                        </div>

                    ))
                }

            </ul>

        </div>
        </div>
        
    )
}