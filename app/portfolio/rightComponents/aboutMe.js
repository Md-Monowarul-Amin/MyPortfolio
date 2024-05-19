import getPersonalData from "@/app/lib/personalData";

export default function AboutMe(){
    const getAboutMeData = getPersonalData().AboutMe;

    return(
        <div className="mb-5 ml-2 mr-2">
            <p className="text-2xl"> About Me </p>
   
            <div className="mt-2">
                <p>Assalamu Alaikum. I am a fourth year BSc. in Software Engineering student in Computer Science and Engineering Department at Islamic University of Technology, Gazipur.</p> <br></br>
                <p> I am fortunate enough to have my final year thesis under the supervision of
                    <a href="https://cse.iutoic-dhaka.edu/profile/mahbub/education" className="text-blue-500" target="_blank"> Professor Dr. Muhammad Mahbub Alam </a>
                    in <a href="https://cse.iutoic-dhaka.edu/research-group" className="text-blue-500" >Networking Research Group</a> .
                    Our work Primarily focuses on various concepts of <b>Operating Systems</b>  specially in Memory Management.
                </p><br></br>
                <p>However, I am highly enthusiastic in <b>Full Stack Web & Mobile Application Development</b>, and
                currently having internship in a leading software firm in Bangladesh -<a href="https://orangebd.com/" target="_blank" className="text-blue-500"> OrangeBD </a>  as a Software Developer.</p>
                <br></br>
                <p className="font-bold"> I am on the software industry job market. Please send me an email if you are recruting. </p>
            </div>

        </div>
    )
}