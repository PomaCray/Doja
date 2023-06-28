import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not">
            <h2>Sorry</h2>
            <p>Well I'm not, but This page does not exist.</p>
            <Link to="/">Back to home, Now!</Link>
        </div>
     );
}
 
export default NotFound;