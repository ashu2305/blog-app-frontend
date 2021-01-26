
import react from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBlog from "./Components/AllBlogs";


function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/allblogs" component={AllBlog} />
          <Route path="/" component={Home} />
        </Switch>
      
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
