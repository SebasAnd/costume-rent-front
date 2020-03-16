import React,{Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Log } from './Components/LogComponent/Log.component';
import HomePage from './Pages/HomePage/HomePage.component';

const TestPage = () =>(
  <div>
    Test page for routing XD 
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/test' component={TestPage}/>
        <Route path='/home' component={HomePage}/>
      </Switch>
      
    </div>
  );
}

export default App;
