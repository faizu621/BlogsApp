import Header from "./Header"
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const Home = () =>{
    return(
        <div>
        <Header/>
        <div className="mt-[100px]">
        <Blogs/>
        </div>
        <Pagination/>
        </div>
    )
}
export default Home;