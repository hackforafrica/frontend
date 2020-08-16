
import './Statement.css';
import React, {useState , useEffect} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Statement() {
 const [words,setWords]=useState('');
 useEffect(()=>{
  //async code
 const getWordsData = async () =>{
  await fetch( "https://hackforafricaherokuapp.com/testcontent")
  .then((response)=>response.json())
  .then((response)=>{words=response;
   console.log(words);
   setWords(words);
  document.querySelector('.wordOne').innerHTML=words;
    })
  
  }
  getWordsData();
 },[])
 return (
  <div>
   <p className='wordOne'>{words}</p>
  

  </div>
 )
}

export default Statement
