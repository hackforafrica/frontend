import React, {useState , useEffect} from 'react';
import './Main.css';
import Record from './Record.js';
import Statement from './Statement.js';
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Main() {
  let motivationBackground=document.querySelector('.motivationOne');
  const nextFunction = ()=>{
    if(motivationBackground)
      {/*motivationBackground.innerHTML = motivations[Math.floor(Math.random()*motivations.length)];*/}
      {
        motivations.map((motivation)=>(
          motivationBackground.innerHTML = motivations[Math.floor(Math.random()*motivations.length)].statement
        ))
        
      }
  }
  const [motivations,setMotivations]=useState([]);
 useEffect(()=>{
  //async code
  const getMotivationsData = async () =>{
    await fetch( "https://hackforafrica.herokuapp.com/motivation")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      const motivations = data.map((motivation)=>(
        {
          number: motivation.motivation_id,//motivationid
          statement: motivation.quote,//motivation quote
          name:motivation.quoteby// author 
        }
        
      ))
      setMotivations(motivations);
      console.log(motivations[2]);
      document.querySelector('.motivationOne').innerHTML=motivations[0].statement;
    })
  
  }
  getMotivationsData();
 },[])

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
    <div className='motivation__page'>
     <div className='Main__motivation'>
      <ArrowBackIosIcon className='prev' onClick={nextFunction}/>
     <h3 className='motivationOne'></h3>
      <ArrowForwardIosIcon className='next' onClick={nextFunction}/>
     </div>
     <div className='statement__page'>
       <Statement className='state'/>
     </div>
     <div className='speech__page'>
       <Record/>
     </div>
    </div>
  </div>
 )
}

export default Main
