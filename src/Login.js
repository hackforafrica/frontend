import React from 'react';
import './Login.css';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

function Login() {
 return (
  <div className='Login__page'>
   <h1>Welcome Back!</h1>
   <Input className='mail' placeholder='email' type='email'disableUnderline='true'
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
   <button className='login__button'type='submit'>LOG IN</button>
   <p className='info'>To keep up the pace login with your personal info</p>
  </div>
 )
}

export default Login;
