import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination = () =>
{
    const{page,totalPages,handlePage}=useContext(AppContext);
    console.log(page);
    return(
        <div className=" w-full py-3 border shadow-md fixed bottom-0 bg-white ">
           <div className="w-11/12 max-w-[670px] mx-auto flex justify-between ">
            <div className=" flex ml-4 gap-x-2">
                {
                    page>1 &&
                    <button onClick={()=> handlePage(page-1)} 
                    className="py-1 px-3 border-2 rounded-md ">
                        Previous
                    </button>
                }
                {
                    page<totalPages &&
                    <button onClick={()=> handlePage(page+1)}
                    className="py-1 px-3 border-2 rounded-md">
                        Next
                    </button>
                }
            </div>
            <p className="font-bold">Page {page} of {totalPages}</p>
           </div>
        </div>
    )
}
export default Pagination;