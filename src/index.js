import './assets/styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Header from './Components/header'  
import FlightDetail from './Components/flight-detail'
import FlightList from './Components/flight-list'
import registerServiceWorker from './registerServiceWorker';
  

//import App from './App';

ReactDOM.render(
    <Header/>, 
    document.getElementById('header'));
ReactDOM.render(
    <Router>
        <div className="container">
        <Route exact path="/" component={FlightList}/>            
        <Route path="/flight" component={FlightDetail}/>            
        </div>
    </Router>, 
    document.getElementById('container'));
//registerServiceWorker();
