import React ,{Component} from 'react'
import Table from './table';
import TableBody from './table-body';
import TableHead from './table-head'
import TableRow from './table-row'
import Panel from './panel'
import {Button} from './button'

class FlightList extends Component {
    constructor(props){
        super(props);        
        
        //this.state = this.props.flights;  
        this.state = {flights: this.props.flights};
        this.onRowClicked = this.onRowClicked.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onRowClicked(id){            
      
    }

    onEdit(e){
        this.props.history.push('/flight/'+e.target.id);      
    }

    renderFlight() {
        return this.state.flights.map((flight,i)=>{                       
            return (               
                <TableRow  key={i} id={flight.id} onClick={()=>{}}>      
                    <td>{flight.Origin}</td>
                    <td>{flight.Destination}</td>
                    <td>{(flight.International)?'Yes':'No'}</td>
                    <td>{flight.Cargo ? 'Yes' : 'No'}</td>
                    <td><Button id={flight.id} type="info" size="mm" title="Details" onClick={this.onEdit}/></td>
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
                <td>View</td>
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

//  this.onRowClicked            