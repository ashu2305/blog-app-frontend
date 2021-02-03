
import react from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBlog from "./Components/AllBlogs";
import CreateBlog from "./Components/CreateBlog";
import SingleBlog from "./Components/SingleBlog";
import UpdateBlog from "./Components/UpdateBlog";



function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/createblog' component={CreateBlog}/>
          <Route path='/updateblog/:id' component={UpdateBlog}/>
          <Route path='/fullblog/:id' component={SingleBlog}/>
          <Route exact path="/" component={Home} />
          <Route  path="/allblogs" component={AllBlog} />
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
