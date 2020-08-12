import React from 'react';
import './Main.css';
import {Link} from 'react-router-dom';

function Main() {
 const navStyle = {
  color:'white'
 };
 return (
  <div>
   <nav className='Main__nav'>
    <h5>LOGO</h5>
    <ul>
     <Link style={navStyle} to='/About'>
      <li>About</li>
     </Link>
    </ul>
   </nav>
  </div>
 )
}

export default Main
