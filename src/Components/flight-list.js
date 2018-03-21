import React, { Component } from 'react'
import Table from './table';
import TableBody from './table-body';
import TableHead from './table-head'
import TableRow from './table-row'
import Panel from './panel'
import { Button } from './button'

class FlightList extends Component {
    constructor(props) {
        super(props);

        //this.state = this.props.flights;  
        this.state = { 
            flights: this.props.flights,
            editing:false            
         };
        this.onRowClicked = this.onRowClicked.bind(this);
        this.onDetail = this.onDetail.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onRowClicked(flight) {        
        this.props.history.push('/flight/' + flight.id);
    }

    onDetail(flight) {        
        this.props.history.push('/flight/' + flight.id);
    }

    onEdit(flight){
        // this.setState({
        //     editing:true
        // })
        this.props.history.push('/flight/edit/' + flight.id);
    }

    onDelete(flight){
        return (
            <div>Deleting......</div>
        )
    }

    renderFlight() {
        return this.state.flights.map((flight, i) => {
            return (
                <TableRow key={i} id={flight.id} onClick={() => { }}>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Origin}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Destination}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{(flight.International) ? 'Yes' : 'No'}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Cargo ? 'Yes' : 'No'}</td>
                    <td>
                        <Button  type="info" size="mm" title="Details" onClick={this.onDetail.bind(this,flight)} />
                        <Button  type="info" size="mm" title="Edit" onClick={this.onEdit.bind(this,flight)} />
                        <Button  type="remove" size="mm" title="Delete" onClick={this.onDelete.bind(this,flight)} />
                    </td>
                </TableRow>
            )
        })
    }

    render() {
        if(!this.state.editing){
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
        }else{
            return (
                <div><h1>Editing......</h1></div>                
            )
        }
    }
}

export default FlightList;

//  this.onRowClicked            