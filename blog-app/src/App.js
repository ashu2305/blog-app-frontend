
import react from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/allblogs" component={Home} />
        </Switch>
      
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
