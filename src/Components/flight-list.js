import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import Table from './table';
import TableBody from './table-body';
import TableHead from './table-head'
import TableRow from './table-row'
import Panel from './panel'
import { Button } from './button'
import  FlightListService from '../Services/FlightListServices'

class FlightList extends Component {
    constructor(props) {
        super(props);        
        this.state = {             
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
        this.props.history.push('/flight/edit/' + flight.id);
    }

    onDelete(flight){
        this.props.deleteFlight(flight);
    }

    renderFlight() {                
        return this.props.flights.map((flight, i) => {
            return (                
                <TableRow key={i} id={flight.id} onClick={() => { }}>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Origin}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Destination}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{(flight.International) ? 'Yes' : 'No'}</td>
                    <td onClick={this.onRowClicked.bind(this,flight)}>{flight.Cargo ? 'Yes' : 'No'}</td>
                    <td><Button  type="info" size="xs" title="Details" onClick={this.onDetail.bind(this,flight)} /></td>
                    <td><Button  type="info" size="xs" title="Edit" onClick={this.onEdit.bind(this,flight)} /></td>
                    <td><Button  type="remove" size="xs" title="Delete" onClick={this.onDelete.bind(this,flight)} /></td>
                </TableRow>                
            )
        })
    }

    render() {
        if(!this.state.editing){
            return (
                
                    <Table>
                        <TableHead>
                            <td>Origin</td>
                            <td>Destination</td>
                            <td>International</td>
                            <td>Cargo</td>
                            <td>Details</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </TableHead>
                        <TableBody>
                            {this.renderFlight()}
                        </TableBody>
                    </Table>
                
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