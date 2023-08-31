import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const CategoryPage = () =>{
    const navigation=useNavigate();
    const location=useLocation();
    const category =location.pathname.split("/").at(-1);
    return(
        <div>
        <Header/>
        {/* Button and category heading */}
        <div className=" w-11/12 max-w-[670px] mx-auto gap-y-5 mt-[100px] ">
        <div className="flex gap-x-2 items-center ml-10">
            <botton onClick={ () => navigation(-1)}
            className=" cursor-pointer py-1 px-3 border-2 rounded-md"
             >Back</botton>
            <h2 className="font-bold text-xl ">Blogs on 
            <span className=" underline"> {category} </span>
            </h2>
        </div>
        <Blogs/>

        </div>
        <Pagination/>
        </div>
    )
}
export default CategoryPage;