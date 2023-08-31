import { NavLink } from "react-router-dom";


const Card = ({post}) =>{
    return(
        <div>
            <NavLink to={`/blog/${post.id}`}>
              <p className="font-bold text-xl text-blue-700 ">{post.title}</p>
            </NavLink>
                        <p className="text-[14px] mt-1">
                            By <span className="italic"> {post.author} </span> on  
                            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                            <span className="font-bold underline"> {post.category} </span>
                            </NavLink>
                        </p>
                        <p className="text-[14px]">
                            Posted on {post.date}
                        </p>
                        <p className="mt-4  ">{post.content}</p>
                        <div className="flex gap-x-3 text-[12px]">
                            {
                                post.tags.map( (tag,index) =>(
                                    <NavLink to={`/tags/${tag.replaceAll(" ","-" )}`} >
                                    <span key={index} 
                                   className="text-blue-700 underline font-bold">
                                     {`#${tag}`}</span>
                                   </NavLink>   
                                ))
                            }
                        </div>
        </div>
    )
}
export default Card;