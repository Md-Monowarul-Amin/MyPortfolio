import { notFound } from "next/navigation";
import React from "react";
import getBlogs from "../blogsData";


export async function generateMetadata({params}){
    const id = params.id;

    const blogs = getBlogs();

    const blog = blogs.find(blog => blog.id == id);
    if (!blog.id){
        console.log("Blog not found");
    }

    return{
        title: blog.title,
        description: blog.description,
    }

}


export default function Blog({params}){

    const {id} = params;
    console.log({params});
    const blogs = getBlogs();
    const blog = blogs.find(blog => blog.id == id);
    if(id >= 3){
        notFound();
    }
    return (
        <div> 
            <ul className="mt-6">

                    <li>The blog id is {id}</li>
                    <li> Blog Title:{blog.title} </li> 
                    <li> Blog Description:{blog.description} </li>  
                    <br></br>
                    <hr></hr>
            </ul>
         </div>
    )
}