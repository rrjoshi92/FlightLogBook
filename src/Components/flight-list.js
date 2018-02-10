import React ,{Component} from 'react'
import FlightListData from './../Data/flight-list'
import Table from './table';
import TableBody from './table-body';
import TableHead from './table-head'
import TableRow from './table-row'
import Panel from './panel'

class FlightList extends Component {
    constructor(props){
        super(props);        
        this.state = FlightListData; 
    }

    renderFlight() {
        return this.state.flights.map((flight,i)=>{            
            return (
                <TableRow  key={i}>
                    <td>{flight.Origin}</td>
                    <td>{flight.Destination}</td>
                    <td>{(flight.International)?'Yes':'No'}</td>
                    <td>{flight.Cargo ? 'Yes' : 'No'}</td>
                </TableRow>
            )
        })
    }

    render() {
        return (
          <Panel size="auto" title="Flight List">  
            <Table>        
                <TableHead>
                <td>Origin</td>
                <td>Destination</td>
                <td>International</td>
                <td>Cargo</td>
                </TableHead>              
                <TableBody>                               
                    {this.renderFlight()}
                </TableBody>
            </Table>
          </Panel>
        );
      }
}

export default FlightList;

