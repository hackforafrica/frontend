import React from 'react'

function About() {
 return (
  <div>THIS IS ABOUT US PAGE
   <nav>
    {/*this is a navbar component which will hold everything to do with the navbar*/ }
   </nav>
 <p>{/*this will be another component where you will write short information about us
  */}</p>
  {/*remember to apply styling by creating another page About.css
  we are using a unique color in all pages which is a purple and different shades of purple */}
  <p>{/*this is another component that will hold info about contacting us  */}</p>
 <footer>{/*u can add a footer if you want */}</footer>
  </div>
 )
}

export default About
