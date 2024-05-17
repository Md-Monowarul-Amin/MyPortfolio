import { Mr_Dafoe } from "next/font/google";
import React from "react";

export async function generateMetadata(){
    // const id = params.id;

    // const blogs = getBlogs();

    // const blog = blogs.find(blog => blog.id == id);
    // if (!blog.id){
    //     console.log("Blog not found");
    // }

    return{
        title: "Md. Monowarul Amin",
        description: "Md. Monowarul Amin Portfolio",
    }

}


export default function PortFolio(){

    return (
        <main className="mt-10">
            <li>portFolio</li>
        </main>
    )
}