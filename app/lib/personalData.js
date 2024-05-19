import { Amiri_Quran } from "next/font/google";

export default function getPersonalData(){
    const personalData = 
        {   
            "personalInfo":{
                    "name":"Md. Monowarul Amin",
                    "email": "monowarul@iut-dhaka.edu",
                    "emailhref":"mailto:monowarul@iut-dhaka.edu",
            },
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
            "findMeOn":[
                {
                    "imageLink":"/images/SocialMediaIcons/tg.jpg",
                    "siteLink":`https://t.me/MdMonowarulAmin`,
                    "alt":"telegram ",
                },
                {
                    "imageLink":"/images/SocialMediaIcons/fb.png",
                    "siteLink":`https://www.facebook.com/amin.saraj.31`,
                    "alt":"facebook ",
                },
                {
                    "imageLink":"/images/SocialMediaIcons/X.png",
                    "siteLink":`https://x.com/MonowarulMd`,
                    "alt":"X",

                },
                {
                    "imageLink":"/images/SocialMediaIcons/ln.png",
                    "siteLink":`https://www.linkedin.com/in/md-monowarul-amin-a673a0203/`,
                    "alt":"LinkedIn",

                },
                {
                    "imageLink":"/images/SocialMediaIcons/git.png",
                    "siteLink":`https://github.com/Md-Monowarul-Amin`,
                    "alt":"gitHub",

                },
            ],
            "CVlink":"https://drive.google.com/file/d/1GfiniTZ6wZgVfhvhIZtA3Nki3dZgkKCi/view?usp=sharing",
            "AboutMe":["Assalamu Alaikum. I am a fourth year BSc. in Software Engineering student in Department in Computer Science and Engineering at Islamic University of Technology, Gazipur. ",
                        "I am highly enthusiastic in <b>Full Stack Web & Mobile Application Development </b>."
            ],
            "publication":{},
            "projects":{},
            "workExperience":[
                {
                    "title": "Software development intern in ",
                    "companyName":"Orangebd",
                    "href":"https://orangebd.com/",
                    "duration":"June 2024 - September 2024",
                },
                {
                    "title": "Junior backend developer in ",
                    "companyName":"DevStation BD",
                    "href":"https://www.facebook.com/devstationbdltd/?paipv=0&eav=AfZvSkX4_QgwS47xaP7CmDgB1CdHwwr01zn0wyqbn3UHM_nNmLg8MsomWOYp176sOK4&_rdr",
                    "duration":"January 2023 - January 2024",
                },
            ],
        }
    

    return personalData;
}



