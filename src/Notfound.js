import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Notfound = () => {
    return ( 
        <div className="Notfound">
            <h1>Error 404</h1>
            <p>Page not found</p>
            <Link to="/">
                Go back to home page
            </Link>
        </div>
     );
}
 
export default Notfound;
//Error Page