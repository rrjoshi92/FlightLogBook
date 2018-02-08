import React ,{Component} from 'react'

class FlightDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            flight :{
                "Origin":"KSFO",
                "Destination":"KLAX",
                "International":false,
                "Cargo":false
            }
        }
    }

    render() {
        return (
          <div>
              <div>Origin:{this.state.flight.Origin}</div>
              <div>Destination:{this.state.flight.Destination}</div>
              <div>International:{(this.state.flight.International)? "Yes" : "No"}</div>
              <div>International:{(this.state.flight.Cargo)? "Yes" : "No"}</div>
          </div>
        );
      }
}

export default FlightDetail;