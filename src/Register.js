import React, {useState}from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
function Register() {
  const [passw,setPass] = useState('');
  const [fname,setfname]=useState('');
  const [emailA,setemailA]=useState('');
  const registerFunction = async (event)=>{
    event.preventDefault();
    try{
      const bodyt = {fullname:fname,emailaddress:emailA,passw:passw};
      let data;
      const response = await fetch("http://hackforafrica.herokuapp.com/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bodyt)
      })
      .then((response)=>response.json())
      .then((response)=>{data=response;
      console.log(data)
    if (data !==''){
      window.location='/';
    }
  else{
    alert('enter your details please');
  }})
    
    }
    catch(error){
      console.log(error.message);
    }
  }
  
 
 return (
<div className='registerStyle'>
  <div className='register__page'>
   <h1>CREATE ACCOUNT</h1>
   <Input className='name' placeholder='name' value={fname}type='text'disableUnderline='true'onChange={event=>setfname(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <AccountCircleIcon/>
      </InputAdornment>
     }
   />
   <p >or use your email for registration</p>  
   <Input className='mail' placeholder='email' value={emailA}type='email'disableUnderline='true'onChange={event=>setemailA(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <MailOutlineIcon/>
      </InputAdornment>
     }
   />
   <Input className='pass' placeholder='password' value={passw}type='password'disableUnderline='true'onChange={event=>setPass(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <VisibilityOffIcon/>
      </InputAdornment>
     }
   />
   <Link to='/Main'>
    <button className='signup-button'onClick={registerFunction} >SIGN UP</button>
   </Link>
  </div> 
  </div>
 )
}

export default Register;
