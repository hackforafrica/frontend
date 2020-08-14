import React from 'react'

function About() {
 return (
  <div class="Abts"  > 
          
          <p>About Us</p>

      <ul class= "AM" > 
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
 <p>{ /*
        
 */ }</p> 
  {/*remember to apply styling by creating another page About.css
  we are using a unique color in all pages which is a purple and different shades of purple */}
  <p> Contact us </p>
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
 </footer> 
  </div>
 )
}

export default About
