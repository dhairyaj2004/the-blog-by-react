import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import useFetch from './useFetch'
const BlogDetails = () => {
    const{id}=useParams()
    const {Data:blogs,isLoading,Error}=useFetch("http://localhost:8000/blogs/"+id)
    const history=useHistory()
    const [isPending,setisPending]=useState(false)
    const handleDelete=()=>{
      setisPending(true)
      fetch('http://localhost:8000/blogs/'+blogs.id,{
         method:"DELETE"
      }).then(()=>{
         history.push("/")
         setisPending(false)
      })
    }
    return ( 
        <div className="BlogDetails">
           {isLoading && <div>Loading</div>}
           {Error && <div>{Error}</div>}
           {blogs && 
           <article>
             <h2>{blogs.title}</h2>
             <p>Written by <b>{blogs.author}</b></p><br />
             <p>{blogs.body}</p>
             {!isPending && <button onClick={handleDelete}>Delete Blog</button>}
             {isPending && <button onClick={handleDelete}>Deleting Blog...</button>}
           </article>
           }
        </div>
     );
}
 
export default BlogDetails;