import getPersonalData from "@/app/lib/personalData";

export default function GetExperience(){
        
    const experience = getPersonalData().workExperience;


    return(
        <div className="mt-2 mb-5 ml-2 mr-2">
            <p className="text-2xl"> Work Experience </p>

            <div className="mt-2 ml-4 mr-2">
                {
                    experience.map(e => (
                        <div className="flex justify-between items-center" key={e.companyName}>
                            <li> {e.title} <a href={e.href} className="text-blue-500" > {e.companyName} </a> </li>
                            <p className="text-xs font-light text-right">{e.duration}</p> 
                        </div>    
                    ))
                }
            </div>
        </div>
    )

}