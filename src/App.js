import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
         <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route to="*">
                <NotFound/>
            </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

     //    {title:'My new website', body:'lorem ipsum...', author:'natshi', id: 1 },
     //    {title:'Welcome Party!', body:'lorem ipsum...', author:'Ryou', id: 2 },
     //    {title:'Web dev top tips', body:'lorem ipsum...', author:'natshi', id: 3 }