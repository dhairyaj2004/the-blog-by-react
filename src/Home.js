import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // let name="Dhairya"
    // const [name,setName]=useState("Dhairya")
    // const [age,setAge]=useState(25)
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blogs=>blogs.id!==id)
    //     setBlogs(newBlogs)
    //}
    // useEffect hook runs after every render
    const {Data:blogs,isLoading,Error}=useFetch("http://localhost:8000/blogs")//useFetch is custom hook 
    
    // const click=()=>{
    // //    let name="Shah"
    // //    console.log(name)
    // // setName("Shah")
    // // setAge(35)
    // }
    // const clickAgain=(name)=>{
    //     console.log("Hello",name);
    // }
    return (  
         <> 
        <div className="home">
           
            {Error && <div>{Error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs/*till blogs is null this will not go ahead if it was null and go ahead then .map() will not work*/ && <Bloglist blogs={blogs} title="All Blogs" /*handleDelete={handleDelete}*/ /> }
            {/* <Bloglist blogs={blogs.filter((blogs)=>blogs.author==="Sam Altman")} title="Sam's blog" /> */}
            {/* value is changing into console not in frontend,P is taking Dhairya from home so that we will use "UseState hook" it will change value in frontend not in console*/}
            {/* <p>{name} is {age} year old</p>  */}
            {/* click events */}
            {/* <button onClick={click}>click me</button> */}
            {/* <button onClick={()=>clickAgain('Dhairya')}>click again</button> */}
            {/* for useEffect below button */}
            
        </div>
        </>
    );
    }
export default Home;
//as a professional blog website we cant give handle delete to users so i am commenting it out but it is imp to learn functions as props