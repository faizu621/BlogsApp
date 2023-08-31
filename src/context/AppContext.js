
import { useState } from "react";
import { createContext } from "react";
import {baseUrl} from '../baseUrl';

export const AppContext=createContext();



export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);



    async function fetchdata(page=1,tag=null,category){

        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        if(tag)
        {
            url+=`&tag=${tag}`;
        }
        if(category)
        {
            url+=`&category=${category}`;
        }
        try{

            const result=await fetch(url);
            const data=await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(c){
            console.log('Error in fetching data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePage(page)
    {
        setPage(page);
        fetchdata(page);
    }

    const value={
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        fetchdata,
        handlePage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}