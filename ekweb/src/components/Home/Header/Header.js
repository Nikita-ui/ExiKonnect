import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {Navbar,NavDropdown,Nav,Button,ButtonToolbar} from 'react-bootstrap';
import logo from './logo.jpg'; 



class Header extends Component{
 render(){
  return(
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"> <img alt="logo" src={logo} width="40" height="30" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    
      <NavDropdown title="About us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Aboutus">Aboutus </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Partners" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Link to="FAQs" class="nav-link">FAQs</Link>
      <Link to="Contactus" class="nav-link">Contact us</Link>
    </Nav>
    <Nav>
    <Link to="Signup" class="nav_account">Signup</Link>
     <Link to="SignIn" class="nav_account">SignIn</Link>
    </Nav>
    <ButtonToolbar>
    <Button variant="primary" className="join_btn" size="lg">
      Join Now
    </Button>
</ButtonToolbar>
  </Navbar.Collapse>
</Navbar>

 
</>
  );
}
}

 export default Header;