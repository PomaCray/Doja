import BlogList from "./BlogList";
import useFetch from "./Fetch";



const Home = () => {

    const {data: blogs, IsPending, error}= useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {IsPending && <div>Loading....</div>}
           {blogs && <BlogList blogs={blogs}  title="All blogs!"/>}
        </div>
     );
}
 
export default Home;