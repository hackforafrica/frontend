import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';


function Login() {
  const loginFunction = async()=>{await fetch("http://hackforafrica.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({'emailaddress':'ann@gmail.com','passw':'123456789'})
})
.then((response)=>response.json())
.then((data)=>{
  console.log(data)});}
    
  
 return (
   <div className='LoginStyle'>
    <div className='Login__page'>
       <h1>Welcome Back!</h1>
       <Input className='mail' placeholder='email'       type='email'disableUnderline='true'
       startAdornment={
        <InputAdornment position="start">
        <VisibilityOffIcon/>
        </InputAdornment>
        }
       />
       <Input className='pass' placeholder='password' type='password'disableUnderline='true'
       startAdornment={
       <InputAdornment position="start">
        <EmailIcon/>
       </InputAdornment>
        }
       />
       <p className='info'>To keep up the pace login with your personal info</p>
       <Link to='/Main'>
       <button className='login__button'type='submit' onClick={loginFunction}>LOG IN</button>
       </Link>
       <p className='sign_up'>Don't have an account</p>
       <Link to='/Register' className='click__signup'>CLICK HERE
       </Link>
     {/* <button className='signbutton'>SIGN UP</button>
   </p>*/}
    </div>
   </div>
 )
}

  

export default Login;
