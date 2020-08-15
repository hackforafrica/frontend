import React ,{useState}from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
function Login() {
 const [passw,setPass] = useState('');
  const [emailA,setemailA]=useState('');
 const loginFunction = async (event)=>{
  event.preventDefault();
  try{
    const body = {emailaddress:emailA,passw:passw};
    let obj;
    const response = await fetch("http://hackforafrica.herokuapp.com/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    })
    .then((response)=>response.json())
    .then((response)=>{ obj=response;
      console.log(obj);
    if (obj != 'unsuccess'){window.location='/Main'}else{
      alert('you dont have an account');
    }})
    //.then((response)=>{console.log(response)})
    response.json().then((data)=>{
      console.log(data)})
    //window.location = '/Main';
  }
  catch(error){
    console.log(error.message);
  }
}
  
 return (
   <div className='LoginStyle'>
    <div className='Login__page'>
       <h1>Welcome Back!</h1>
       <Input className='mail' placeholder='email'  value={emailA}     type='email'disableUnderline='true'onChange={event=>setemailA(event.target.value)}
       startAdornment={
        <InputAdornment position="start">
        <VisibilityOffIcon/>
        </InputAdornment>
        }
       />
       <Input className='pass' placeholder='password' value={passw}type='password'disableUnderline='true'onChange={event=>setPass(event.target.value)}
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
