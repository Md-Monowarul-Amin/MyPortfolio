import React from "react";
import propic from "@/public/images/propic.jpg";
import Image from "next/image";
import getPersonalData from "@/app/lib/personalData";

export default function Contact(){

    const educations = getPersonalData().contact;

    return(
        <div>
            <h1 className="text-2xl mt-2 mb-2">Contact</h1>
            <div className="mb-2">
                <ul>
                    {
                        educations.map(e => (
                            <div>
                                <p className="text-xs font-light" key={e}> {e} </p>
                            </div>

                        ))
                    }
                </ul>

            </div>
        </div>
        
    )
}