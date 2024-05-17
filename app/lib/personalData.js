import { Amiri_Quran } from "next/font/google";

export default function getPersonalData(){
    const personalData = 
        {   "personalInfo":{},
            "education":[
                {
                 "name": "Islamic University of Technology, Gazipur",
                 "Degree":"BSc. in Software Engineering",
                 "Duration": "2020 - present",
                },
                {
                    "name": "Notre Dame College, Dhaka",
                    "Degree":"Higher Secondary Certificate in Science",
                    "Duration": "2018 - 2020",
                   },
             ],
            "contact":[
                "Md. Monowarul Amin",
                "monowarul@iut-dhaka.edu",
                "Department of Computer Science and Engineering",
                "Software Engineering Programme",
                "Islamic University of Technology, Gazipur",
            ],

            
            "publication":{},
            "projects":{},
        }
    

    return personalData;
}



