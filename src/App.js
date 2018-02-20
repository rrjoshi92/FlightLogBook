import './assets/styles/app.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import Header from './Components/header'  
import SideBar from './Components/side-bar'
import FlightDetail from './Components/flight-detail'
import FlightList from './Components/flight-list'
import AddFlightForm from './Components/add-flight-form'
import FlightlistService from './Services/FlightListServices'



class App extends Component {
    constructor(props){
        super(props);                
    }    

    static defaultProps = {
        flights: FlightlistService.getFlightList().flights
    }   

    render() {
        return (
            <Router>
                {true ?
                <div>
                    <Header/>
                    <SideBar/>
                    <div className="container">                        
                        <Route exact path="/" render={({history})=>(                            
                            <FlightList history={history} flights={this.props.flights}/>
                        )} />                        
                        <Route exact path="/addflight" render={(history)=>(
                            <AddFlightForm/>
                        )}/>            
                        <Route path="/flight/:id"  render={({history,match})=>(
                            <FlightDetail history={history} match={match} flights={this.props.flights}/>
                        )}/>                                    
                    </div>
                </div>
                : <div>Please login!!</div>}    
            </Router>
        );
    }
}

export default App;

