import './assets/styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Header from './Components/header'  
import SideBar from './Components/side-bar'
import FlightDetail from './Components/flight-detail'
import FlightList from './Components/flight-list'
import FlightListData from './Data/flight-list'


ReactDOM.render(    
    <Router>
        <div>
            <Header/>
            <SideBar/>
            <div className="container">
                <Route exact path="/" component={FlightList}/>            
                <Route path="/flight/:id" component={FlightDetail}/>            
            </div>
        </div>    
    </Router>, 
    document.getElementById('container'));


//registerServiceWorker();
