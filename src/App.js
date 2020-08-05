import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO HACKFORAFRICA HACKATHON</h1>
      <form>
        <input type='text'placeholder='enter your name'/>
        <input type='email'placeholder='enter your email'/>
        <input placeholder='password'type='password'/>
        <button type='submit'>LOG IN</button>
      </form>
    </div>
  );
}

export default App;
