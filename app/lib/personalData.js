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
                    "imageLink":"./images/SocialMediaIcons/tg.jpg",
                    "siteLink":`https://t.me/MdMonowarulAmin`,
                    "alt":"telegram ",
                },
                {
                    "imageLink":"./images/SocialMediaIcons/fb.png",
                    "siteLink":`https://www.facebook.com/amin.saraj.31`,
                    "alt":"facebook ",
                },
                {
                    "imageLink":"./images/SocialMediaIcons/X.png",
                    "siteLink":`https://x.com/MonowarulMd`,
                    "alt":"X",

                },
                {
                    "imageLink":"./images/SocialMediaIcons/ln.png",
                    "siteLink":`https://www.linkedin.com/in/md-monowarul-amin-a673a0203/`,
                    "alt":"LinkedIn",

                },
                {
                    "imageLink":"./images/SocialMediaIcons/git.png",
                    "siteLink":`https://github.com/Md-Monowarul-Amin`,
                    "alt":"gitHub",

                },
            ],
            "CVlink":"https://drive.google.com/file/d/1GfiniTZ6wZgVfhvhIZtA3Nki3dZgkKCi/view?usp=sharing",
            "Tools": [
                    {
                        "key": "Programming Languages",
                        "values":[
                            {
                            "caption": "C",
                            "imageLink": "./images/Tools/c.png"
                        },
                        {   "caption": "C#",
                            "imageLink": "./images/Tools/csharp.png"
                        },
                        {   "caption": "python",
                            "imageLink": "./images/Tools/python.jpg"
                        },
                        {   "caption": "java",
                            "imageLink": "./images/Tools/java.png"
                        },
                    ],
                    
                },
                {   
                    "key":"Frame Works",
                    "values":[
                        {
                            "caption": ".Net",
                            "imageLink": "./images/Tools/dotnetcore.png",
                        },
                        {   "caption": "django",
                            "imageLink": "./images/Tools/django.png",
                        },
                        {   "caption": "Next.js",
                            "imageLink": "./images/Tools/next.png",
                        },
                    ]   
                },
                {
                    "key":"Tools ",
                    "values":[
                        {
                            "caption": "git",
                            "imageLink": "./images/Tools/git.png",
                        },
                        {   "caption": "Jira",
                            "imageLink": "./images/Tools/jira.png",
                        },
                        {   "caption": "slack",
                            "imageLink": "./images/Tools/slack.png",
                        },
                    ]
                },
            ],
            "publication":{},
            "projects":[
                {
                    "title":"BloodLink",
                    "imageLink": "./images/Projects/bloodLink.png",
                    "gitLink":"",
                    "Demo":"",
                    "Description":"A hassle-free blood donation mobile application to connect donors and receivers in the fastest possible way which was built using ASP .NET Core, Flutter, and MySQL."
                },
                {
                    "title":"Auction",
                    "imageLink": "./images/Projects/auction.jpg",
                    "gitLink":"",
                    "Demo":"",
                    "Description":"An Auction site to buy and cell products online using bid price."
                },
                {
                    "title":"Space Shooting Game",
                    "imageLink": "./images/Projects/space.PNG",
                    "gitLink":"",
                    "Demo":"",
                    "Description":"A Java Script based shooting game"
                },
                {
                    "title":"Excel Automaion with Python",
                    "imageLink": "./images/Projects/ExcelPython.png",
                    "gitLink":"",
                    "Demo":"",
                    "Description":"Automaing excel files for solving complex accounting problems with the help of Python. "
                },
            ],
            "workExperience":[
                {
                    "title": "Software development intern in ",
                    "companyName":"Orangebd",
                    "href":"https://orangebd.com/",
                    "duration":"June 2024 - September 2024",
                    "Description": ""
                },
                {
                    "title": "Junior backend developer in ",
                    "companyName":"DevStation BD",
                    "href":"https://www.facebook.com/devstationbdltd/?paipv=0&eav=AfZvSkX4_QgwS47xaP7CmDgB1CdHwwr01zn0wyqbn3UHM_nNmLg8MsomWOYp176sOK4&_rdr",
                    "duration":"January 2023 - January 2024",
                    "Description":"Worked as a backend developer in a charitable blood donation app project - Bloodlink. Contributed in the backend part built using ASP .Net Core"
                },
            ],
        }
    

    return personalData;
}



