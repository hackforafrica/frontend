import React, {useState}from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
function Register() {
const [user_info,setuser_Info] = useState([{passw:'',fullname:'',emailaddress:''}]);
  const registerFunction = (event)=>{
     event.preventDefault();
     fetch("https://hackforafrica.herokuapp.com/register",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({user_info})
     })
     .then((res)=>res.json())
     .then((data)=>console.log('yeeeeeeeeey', data))
     .catch((err)=>console.log('noooooo' ,err))
     
     
  }
 
 return (
<div className='registerStyle'>
  <div className='register__page'>
   <h1>CREATE ACCOUNT</h1>
   <Input className='name' placeholder='name' value={user_info.fullname}type='text'disableUnderline='true'onChange={event=>setuser_Info(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <AccountCircleIcon/>
      </InputAdornment>
     }
   />
   <p >or use your email for registration</p>  
   <Input className='mail' placeholder='email' value={user_info.emailaddress}type='email'disableUnderline='true'onChange={event=>setuser_Info(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <MailOutlineIcon/>
      </InputAdornment>
     }
   />
   <Input className='pass' placeholder='password' value={user_info.passw}type='password'disableUnderline='true'onChange={event=>setuser_Info(event.target.value)}
     startAdornment={
      <InputAdornment position="start">
        <VisibilityOffIcon/>
      </InputAdornment>
     }
   />
   <Link to='/Main'>
    <button className='signup-button' onClick={registerFunction}>SIGN UP</button>
   </Link>
  </div>
  </div>
 )
}

export default Register;
