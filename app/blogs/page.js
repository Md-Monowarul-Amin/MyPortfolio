import Link from "next/link"



export default function Blogs(){
    const blogs = [
        {   
            id:1,
            title:"Blog 1",
            description:"Blog 1 description",
        },
        {   
            id:2,
            title:"Blog 2",
            description:"Blog 2 description",
        },
    ] 

    return (
        <main className="mt-10">
            <ul>
                {blogs.map((blog) => (
                    <ul className="mb-5">
                        <li><Link href={`/blogs/${blog.id}`} key={blog.id}> Blog {blog.id} </Link></li>
                        <li>Title: {blog.title} </li> 
                    </ul>
                ))
                }
            </ul>
        </main>
    )
}