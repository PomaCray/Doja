import { Link } from "react-router-dom";

const BlogList = ({ blogs, title}) => {
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((x) => (
                <div className="blog-preview" key={x.id}>
                    <Link to = {`/blogs/${x.id}`}>
                        <h2>{x.title}</h2>
                        <p>Written by {x.author}</p>
                    </Link>
                 
                </div>
            ))}    
        </div>
    );
}
 
export default BlogList;