import React from 'react';
import './Register.css';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

function Register() {
 return (
  <div className='register__page'>
   <h1>CREATE ACCOUNT</h1>
   <IconButton color='primary'className='register-button'>
    <FacebookIcon className='register__icon'/>
    <GTranslateIcon className='register__icon'/>
   </IconButton>
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
  </div>
 )
}

export default Register;
