import React from 'react';
import './App.css';
import Login from'./Login.js';
import Register from'./Register.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Register}/>
        <Route path='/Register'component={Register}/>
        <Route path='/Login'component={Login}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
