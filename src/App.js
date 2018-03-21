import './assets/styles/app.scss';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route    
  } from 'react-router-dom';
import Header from './Components/header'  
import SideBar from './Components/side-bar'
import FlightDetail from './Components/flight-detail'
import FlightList from './Components/flight-list'
import AddFlightForm from './Components/add-flight-form'
import {Preloader} from './Components/preloader'
import FlightlistService from './Services/FlightListServices'

class App extends Component {       
    constructor(props){
        super(props);

        this.state = {
            loading:true            
        }
        this.addFlight = this.addFlight.bind(this);                

    }           

    addFlight(flight){               
        this.setState({
            flights:[
                ...this.state.flights,
                flight
            ]
        },FlightlistService.addFlight(flight));        
    }

    componentWillMount = () => {            
        FlightlistService.getFlightList().then((flights)=>{                   
        this.setState({
            loading:false,
            flights:flights
        });   
      })          
    }

    render() {        
        return (
            <Router>
                {true ?
                <div>
                { this.state.loading ? <Preloader/> :
                    <div>
                        <Header/>
                        <SideBar/>                    
                        <div className="container">                        
                            <Route exact path="/" render={({history})=>(                            
                                <FlightList history={history} flights={this.state.flights}/>
                            )} />                        
                            <Route exact path="/addflight" render={(history)=>(
                                <AddFlightForm  history={history} addFlight = {this.addFlight} />
                            )}/>
                            <Route exact path="/flight/edit/:id"  render={({history,match})=>(
                                <AddFlightForm  history={history} match={match} flights={this.state.flights} />
                            )}/>            
                            <Route exact path="/flight/:id"  render={({history,match})=>(
                                <FlightDetail history={history} match={match} flights={this.state.flights}/>
                            )}/>                                
                        </div>
                    </div>
                }
                </div>
                : <div>Please login!!</div>}    
            </Router>
        );
    }
}

export default App;

