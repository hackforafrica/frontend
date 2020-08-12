import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

function Register() {
 return (
<div className='registerStyle'>
  <div className='register__page'>
   <h1>CREATE ACCOUNT</h1>
   <Input className='name' placeholder='name' type='text'disableUnderline='true'
     startAdornment={
      <InputAdornment position="start">
        <AccountCircleIcon/>
      </InputAdornment>
     }
   />
   <p >or use your email for registration</p>  
   <Input className='mail' placeholder='email' type='email'disableUnderline='true'
     startAdornment={
      <InputAdornment position="start">
        <MailOutlineIcon/>
      </InputAdornment>
     }
   />
   <Input className='pass' placeholder='password' type='password'disableUnderline='true'
     startAdornment={
      <InputAdornment position="start">
        <VisibilityOffIcon/>
      </InputAdornment>
     }
   />
   <Link to='/Main'>
    <button className='signup-button'>SIGN UP</button>
   </Link>
  </div>
  </div>
 )
}

export default Register;
