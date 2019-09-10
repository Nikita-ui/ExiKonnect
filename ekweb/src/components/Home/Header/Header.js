import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';



class Header extends Component{
 render(){
  return(
    <>
  
  <nav className="animenu" role="navigation" aria-label="Menu">
  <button className="animenu__toggle">
    <span className="animenu__toggle__bar"></span>
    <span className="animenu__toggle__bar"></span>
    <span className="animenu__toggle__bar"></span>
  </button>

  <ul className="animenu__nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Aboutus">Aboutus</Link></li>
    <li>
      <Link to="#" className="animenu__nav__hasDropdown" aria-haspopup="true">Events</Link>
      <ul className="animenu__nav__dropdown" aria-label="submenu">
        <li><Link to="EventList" role="menuitem">EventList</Link></li>
        <li><Link to="Eventprofile" role="menuitem">EventProfile</Link></li>
      </ul>
    </li>
    <li>
      <Link className="animenu__nav__hasDropdown" aria-haspopup="true">Partners</Link>
      <ul className="animenu__nav__dropdown" aria-label="submenu">
        <li><Link to="#" role="menuitem">Sub Item 1</Link></li>
        <li><Link to="#" role="menuitem">Sub Item 2</Link></li>
        <li><Link to="#" role="menuitem">Sub Item 3</Link></li>
      </ul>
    </li>
    <li><Link to="FAQs">FAQs</Link></li>
    <li><Link to="Contactus">Contact us</Link></li>
  </ul>
</nav>

</>
  );
}
}

 export default Header;