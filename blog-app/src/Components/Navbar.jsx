import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar() {
    var x=-1; 
    console.log(x);
    return (
    <div>
        {x>0 ? (
            <h1>{x}</h1>
        ) : (
            <h1>{0}</h1>

        )}
    </div>
    );
  }
  
  export default NavBar;