import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <>
        <div className="navbar">
         
            <h1>Tech Blogs</h1>
             
      
        <div className="links">
             <Link to="/">Home</Link>
             <Link to="/Create" style={{color:"white",
             backgroundColor:'#f1356d',
             borderRadius:'5px'}}>New Blog</Link>
        </div></div>
        </>
     );
}
 
export default Navbar;