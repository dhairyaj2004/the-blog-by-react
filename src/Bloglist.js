//Used to display list of blog
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Bloglist = ({blogs,title,/*handleDelete*/}) => {
    // const blogs=props.blogs
    //you can also use props in this way and also can write above in bracket
    return ( 
        <div>
            <h2>{title}</h2>  
            {/* We cant access this blogs from Home.js so we have to use PROPS */}
            {blogs.map((blogs)=>(
                <div className="preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.author}</p>
                    </Link>
                    
                    {/* <button onClick={()=>{handleDelete(blogs.id)}}>Delete</button> */}
                </div>))}
                
        </div>  
     );
}
 
export default Bloglist;