import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import './index.css';
import App from './App';
import FlightDetail from './Components/flight-detail'
import FlightList from './Components/flight-list'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>, 
    document.getElementById('header'));
ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={FlightList}/>            
        <Route path="/flight" component={FlightDetail}/>            
        </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
