'use client';
import Button from "@/app/components/button";
import React from "react";
import mission from "@/public/images/mission.png";
import Image from "next/image";
import getBlogs from "@/app/blogs/blogsData";
import Link from "next/link"

export default function Mission(){

    const blogs = getBlogs();

    return(
       <main className="mt-10">
            <div>About our Mission</div>
            {/* <p className="mt-5" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p> */}

            <ul>
                {blogs.map((blog) => (
                    <ul>
                        <li><Link href={`../blogs/${blog.id}`} key={blog.id}> Blog {blog.id} </Link></li>
                        <li>Title: {blog.title} </li>
                        <li>{blog.description}</li>

                    </ul>
                )
                )
            }
                
            </ul>

            <div className="w-[100px] ml-20">
                <Image src={mission} alt="Mission" quality={100}/>
            </div>
            <div className="mt-5">
                <Button/>
            </div>


       </main>
    )
}