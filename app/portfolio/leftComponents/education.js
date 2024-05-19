import React from "react";
import propic from "@/public/images/propic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";

export default function Education(){

    const educations = getPersonalData().education;

    return(
        <div>
            <h1 className="text-2xl mt-2 ">Education</h1>
        <div>
            <ul>
                {
                    educations.map(e => (
                        <div className="mt-2 mb-2">
                            <p className="text-base" key={e.name}> {e.Degree} </p>
                            <p className="text-sm " key={e.Degree}> {e.name} </p>
                            <p className="text-xs font-light" key={e.Duration}> {e.Duration} </p>
                        </div>

                    ))
                }

            </ul>

        </div>
        </div>
        
    )
}