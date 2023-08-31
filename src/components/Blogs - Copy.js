import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () =>
{
    const {posts,loading}=useContext(AppContext); 
    console.log(posts);
    return(
        <div className=" w-11/12 max-w-[670px] mx-auto gap-y-5 mb-[100px] ">
        {
            loading ? (<Spinner/>) : 
            (
                posts.length === 0 ?
                (<div>
                    No POST FOUND
                </div>) :
                (
                    posts.map( (post) =>(
                        <div key={post.id} className="mt-4">
                            <Card post={post}/>
                        </div>
                    ))
                )
            )
        }
        </div>
    )
}
export default Blogs;