import { useHistory, useParams } from "react-router-dom";
import useFetch from "./Fetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: x, IsPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + x.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
           { IsPending && <div>Loading...</div> }
           { error && <div>{ error }</div> }
           { x && (
            <article>
                <h2>{ x.title }</h2>
                <p> Written by { x.author }</p>
                <div>{ x.body }</div>
                <button onClick={handleClick} >delete</button>
            </article>
           )}
        </div>
    );
}
 
export default BlogDetails;