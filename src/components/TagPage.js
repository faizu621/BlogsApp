import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";


const TagPage = () =>{
    const navigation=useNavigate();
    const location = useLocation();
    const tag =location.pathname.split("/").at(-1);

    return(
        <div>
          <Header/>
          <div className=" w-11/12 max-w-[670px] mx-auto gap-y-5 mt-[100px] ">
          <div className="flex gap-x-2 items-center ml-10">
            <botton onClick={ () => navigation(-1)}
            className=" cursor-pointer py-1 px-3 border-2 rounded-md"
             >Back</botton>
            <h2 className="font-bold text-xl ">Blogs Tagged 
            <span className=" underline"> #{tag} </span>
            </h2>
            </div>
            <div>
                <Blogs/>
            </div>
        </div>
        <Pagination/>
        </div>
    )
}
export default TagPage;