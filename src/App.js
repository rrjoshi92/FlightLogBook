import './assets/styles/app.scss';
import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Header from './FlightLogComponents/header'
import SideBar from './FlightLogComponents/side-bar'
import FlightDetail from './FlightLogComponents/flight-detail'
import FlightList from './FlightLogComponents/flight-list'
import AddFlightForm from './FlightLogComponents/add-flight-form'
import { Preloader } from './Components/preloader'
import FlightlistService from './Services/FlightListServices'
import About from './FlightLogComponents/flight-about'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
        this.addFlight = this.addFlight.bind(this);
        this.updateFlight = this.updateFlight.bind(this);
        this.fatchFlightList = this.fatchFlightList.bind(this);
        this.deleteFlight = this.deleteFlight.bind(this);
    }

    addFlight(flight) {
        this.setState({
            flights: [
                ...this.state.flights,
                flight
            ]
        }, FlightlistService.addFlight(flight));
    }

    updateFlight(flight) {
        FlightlistService.updateFlight(flight).then(() => {
            FlightlistService.getFlightList().then((flights) => {
                this.setState({
                    loading: false,
                    flights: flights
                });
            });
        });
    }

    deleteFlight(flight){       
        FlightlistService.deleteFlight(flight).then(()=>{            
            this.fatchFlightList();
        }); 
    }

    fatchFlightList(){
        FlightlistService.getFlightList().then((flights) => {            
            this.setState({
                loading: false,
                flights: flights
            });            
        });
    }

    componentDidUpdate = ()=>{
        
    }
    
    componentWillMount = () => {
        this.fatchFlightList();
    }

    render() {
        return (
            <Router hashType="noslash">
                {true ?
                    <div>
                        {this.state.loading ? <Preloader /> :
                            <div>
                                <Header />
                                <SideBar />
                                <div className="container">
                                    <Switch>
                                        <Route exact path="/" render={({ history }) => (
                                            <FlightList history={history} flights={this.state.flights} deleteFlight={this.deleteFlight} />
                                        )} />
                                        <Route exact path="/addflight" render={(history) => (
                                            <AddFlightForm history={history} addFlight={this.addFlight} />
                                        )} />
                                        <Route exact path="/flight/edit/:id" render={({ history, match }) => (
                                            <AddFlightForm history={history} match={match} updateFlight={this.updateFlight} flights={this.state.flights} />
                                        )} />
                                        <Route exact path="/flight/:id" render={({ history, match }) => (
                                            <FlightDetail history={history} match={match} flights={this.state.flights} />
                                        )} />
                                        <Route exact path="/about" render={({ history, match }) => (
                                            <About/>
                                        )} />
                                        <Route render={({ history, match }) => (
                                            <div><h1>404</h1></div>
                                        )} />
                                    </Switch>
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

