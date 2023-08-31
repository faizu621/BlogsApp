import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route,Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import TagPage from "./components/TagPage";
import BlogPage from "./components/BlogPage";
import CategoryPage from "./components/CategoryPage";
import './App.css';

export default function App() {

  const {fetchdata}=useContext(AppContext);

  const [searchParams,setSearchParams]=useSearchParams();

  const location=useLocation();
  
  useEffect( ()=>{
  const page=searchParams.get("page") ?? 1;

  if(location.pathname.includes("tags")){
    const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchdata(Number(page),tag)
  }
  if(location.pathname.includes("categories")){
    const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchdata(Number(page),null,category);
  }
  else
  {
    fetchdata(Number(page));
  }
  },[location.pathname,location.search]);

  return <div>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
      
    </Routes>
  </div>
  ;
}
