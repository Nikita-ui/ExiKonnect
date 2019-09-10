import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './ProfileHeader.css';
import Image from 'react-bootstrap/Image';
import profilepic from '../../../Assets/modi.jpg';

const ProfileHeader=()=>{
    return(
   <>
  
  <Navbar id="Profile_nav" bg="dark"  variant="dark">
    <Navbar.Brand href="#home"><Image width="180" id="img1" height="180"  src={profilepic} roundedCircle /> </Navbar.Brand>
    <Nav className="mr-auto" >
    <Nav.Link href="#home">Ny Dashboard</Nav.Link>
    <label style={{color:"white", fontSize:"14px",marginLeft:"40px",marginTop:"5px"}}>|</label>
    <Nav.Link href="#features">Profile</Nav.Link>
    <label style={{color:"white", fontSize:"14px",marginLeft:"40px",marginTop:"5px"}}>|</label>
    <Nav.Link href="#pricing">MyConnections</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label style={{color:"white", fontSize:"12px",marginTop:"10px"}}>Hi, Deepak</label>
    </Nav>
   
  </Navbar>
</>
    )
}
export default ProfileHeader;