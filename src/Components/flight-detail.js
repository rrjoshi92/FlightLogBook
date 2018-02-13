import React ,{Component} from 'react'
import Panel from './panel'
//import FlightlistService from './../Services/FlightListServices'
class FlightDetail extends Component {
    constructor(props){       
        super(props);              

        this.state = {            
            flight: this.props.location.state.flights.filter((item)=>{return item.id == this.props.match.params.id})[0]            
        }
    }

    render() {
        return (
          <Panel title="Flight Details">              
              <div className="panel-body"><lebel>Origin:</lebel>{this.state.flight.Origin}</div>
              <div className="panel-body">Destination:{this.state.flight.Destination}</div>
              <div className="panel-body">International:{(this.state.flight.International)? "Yes" : "No"}</div>
              <div className="panel-body">International:{(this.state.flight.Cargo)? "Yes" : "No"}</div>              
          </Panel>
        );
      }
}

export default FlightDetail;