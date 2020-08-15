import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
function About() {
  const navStyle = {
    color:'white',
    textDecoration:'underline',
    listStyle:'dot',
    fontSize:'17px'
   };
 return (
  <div > 
    <nav className='About_nav'>
      <h5>LOGO</h5>
      <ul>
       <Link style={navStyle} to='/Main'>
       <li>Index-page</li>
       </Link>
      </ul>
      </nav>
    <div>
      <h6>GET TO KNOW US</h6>
      <p className='about_info'>
        We are the Cru Devs,a team of four developers.Each one of us is a tech enthusiast and are ready and willing to put much of our skills in bringing technology and development to the world.Our main goal is to see our work,tech that is,being used to elevate education in the African countries and the whole world.Our team leader is Lyle Davids who works alongside Kaleab Melkamu to make sure that this website has a fully functioning database,fully functioning server and data.Ann Maina is the front-end team lead who works with Bamba Yohana to make sure that our users get a comfortable and enjoyable user experience as well as beautiful user interface.We are quite diverse when it comes to using language technologies and libraries and mostly use javascript for both the frontend and backend.We are situated in different parts of the world,India,Cote d'ivoire,South Africa ,Ethiopia and Kenya.
      </p>
    </div>
    <div>
      <form>
        <input className='form_input' type='email'id='email_field'placeholder='name@gmail.com'/>
        <input className='form_input'id='text_field' type='text'placeholder='Send us a message'/>
        <button>SEND</button>
      </form>
    </div>

      {/*<ul class= "AM" > 
         - ANN MAINA : Leader Frontend Development of the project "Operation 100 for Africa"
       </ul> 
       <ul class="BY"> 
         - BAMBA YABAHA S. M. : Held 2nd position of Frontend Development of the project "Operation 100 for Africa" 
         and idea generator of the project name.
       </ul>
       <ul class= "KM"> 
          - KALEAB MELKAMU : Held 2nd position of Backend Development of the project "Operation 100 for Africa"
       </ul>
       <ul class= "LD"> 
         - LYLE DAVIDS : Leader Backend Development of the project "Operation 100 for Africa"
       </ul>
   <nav>
    {

    }
   </nav>
 
  <p> 
    Contact us 
  </p>
  <div class="EmailToCUs" >
  <p>Your Email ID for Feedback </p>
  <input placeholder="Email" type="text" class="EmailToCUs" /> 
  </div>
  <div class="Describ" >
  <p>Please Describe your Message </p>
  <input placeholder="Message Description" type="text" class="Describ" /> 
  </div>
  
 <footer> 
             <span> Copyright (C), August 2020, KYMBALD ALLIANCE </span>
  </footer> */}
  </div>
 )
}

export default About
