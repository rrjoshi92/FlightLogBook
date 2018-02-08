import React ,{Component} from 'react'

class FlightList extends Component {
    constructor(props){
        super(props);
        this.state = {
            "flights": [
            {
                "Origin":"KSFO",
                "Destination":"KLAX",
                "International":false,
                "Cargo":false
            },
            {
                "Origin":"KSFO",
                "Destination":"DFW",
                "International":false,
                "Cargo":true
            },
            {
                "Origin":"EGKK",
                "Destination":"KLAX",
                "International":true,
                "Cargo":false
            },
            {
                "Origin":"KMEM",
                "Destination":"WSSS",
                "International":true,
                "Cargo":true
            },
            {
                "Origin":"VAAH",
                "Destination":"OMDB",
                "International":true,
                "Cargo":false
            }
        ]
        }
    }

    renderFlight() {
        return this.state.flights.map((flight)=>{
            return (
                <tr>
                    <td>{flight.Origin}</td>
                    <td>{flight.Destination}</td>
                    <td>{(flight.International)?'Yes':'No'}</td>
                    <td>{flight.Cargo ? 'Yes' : 'No'}</td>
                </tr>
            )
        })
    }

    render() {
        return (
          <table>
              <tr>
                <th>Origin</th>
                <th>Destination</th>
                <th>International</th>
                <th>Cargo</th>
              </tr>
            {this.renderFlight()}
          </table>
        );
      }
}

export default FlightList;