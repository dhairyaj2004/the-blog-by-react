import { useState,useEffect } from "react"

const useFetch = (url) => {
    const [Data,setData]=useState(null)//null bcz we are calling array from json
    const [isLoading,setisLoading]=useState(true)
    const [Error,setError]=useState(null)
    useEffect(()=>{
        const abortCont=new AbortController()
        setTimeout(() => {
            fetch(url)
         .then(res=>{
            if(!res.ok){
                throw Error("Sorry!!!Can't fetch data")
            }
             return res.json()
         }) 
         
         .then(data=>{
             setData(data)
             setisLoading(false)
             setError(null)
         })
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log('fetch aborted')
            }
            else{
                setisLoading(false)
                setError(err.message)
            }
        })
        return()=>abortCont.abort()//aborting is cleanup function of react
        }, 1000);  
        
    },[url])/*if we want render on once then [] */
    return{Data,isLoading,Error}
}
 
export default useFetch;
//Custom Hook