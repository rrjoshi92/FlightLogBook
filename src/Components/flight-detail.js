import React ,{Component} from 'react'
import Panel from './panel'

class FlightDetail extends Component {
    constructor(props){       
        super(props);                      
        this.state = {            
            flight: this.props.flights.filter((item)=>{return item.id === this.props.match.params.id})[0]            
        }
    }

    render() {        
        if(this.state.flight){
            return (          
            <Panel title="Flight Details">              
                <div className="panel-body">Origin: {this.state.flight.Origin}</div>
                <div className="panel-body">Destination:    {this.state.flight.Destination}</div>
                <div className="panel-body">International:  {(this.state.flight.International)? "Yes" : "No"}</div>
                <div className="panel-body">International:  {(this.state.flight.Cargo)? "Yes" : "No"}</div>              
            </Panel>
            );
        }else{
            return(
                <Panel title="Flight Details">              
                    <div>No Flight found!!</div>
                </Panel>
            )  
        }
      }
}

export default FlightDetail;