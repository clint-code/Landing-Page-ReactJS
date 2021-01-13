import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "./logo/soko-logo.png";


export default class Header extends Component {
    render(){
        return(

        <Navbar bg = "light" sticky="top">
            <NavbarBrand href="#">
                 <img 
                    src={logo} 
                    alt="soko-logo" 
                    width="100px"
                    height = "auto"
                    className="img-fluid"
                    />
            </NavbarBrand>

            <Nav className = "nav-section">
                <Nav.Link href="#about-contest">About</Nav.Link>  
                <Nav.Link href="#featured-entries">Winners &amp; Entries</Nav.Link>  
                <Nav.Link href="#recipes">Recipes</Nav.Link>  

            </Nav>

        </Navbar>  
        )
    }

}