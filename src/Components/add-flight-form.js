import React ,{Component} from 'react'
import Panel from './panel'
import {Input} from './input'
import {Button} from './button'
import {Notifications} from './notifications'
import {eventBus} from './../lib/event-bus';

class AddFlightForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            origin: '',
            destination: '',
            cargo: false,
            international: false     
        }
        this.onOriginChange = this.onOriginChange.bind(this);
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.onCargoChange = this.onCargoChange.bind(this);
        this.onInternationalChange = this.onInternationalChange.bind(this);
        this.newFlight = this.newFlight.bind(this);        
    }
    

    onOriginChange(e){
        this.setState({
            origin: e.target.value
        });              
    }

    onDestinationChange(e){
        this.setState({
            destination: e.target.value
        });        
    }

    onCargoChange(isCargo){
        this.setState({
            cargo: isCargo
        }); 
    }

    onInternationalChange(isInternational){
        this.setState({
            international: isInternational
        }); 
    }
    
    newFlight(e){    
        e.preventDefault();          
        var newFlight = {            
            Origin:this.state.origin,
            Destination:this.state.destination,
            International:this.state.international,
            Cargo:this.state.cargo
        };
        this.props.addFlight(newFlight);
        eventBus.addNotification("success","added")

        this.setState({
            origin: '',
            destination: '',
            cargo: false,
            international: false     
        },()=>{
            this.refs.addFlightForm.reset();
        });                   
    }    

    render(){
        return(
            <div className="form-center">                
                <Panel title="Add new Flight Log">
                    <div className="col-md-6">
                        <form ref="addFlightForm">
                            <label>Origin Airport:</label>               
                            <Input value={this.state.origin} onChange={this.onOriginChange}/> 
                            <label>Destination Airport:</label>               
                            <Input value={this.state.destination} onChange={this.onDestinationChange}/>                    
                            <Input type="checkbox" label="Cargo" value={this.state.cargo} onChange={this.onCargoChange}/>                                                
                            <Input type="checkbox" label="International" value={this.state.international} onChange={this.onInternationalChange}/>      
                            <hr/>
                            <Button type="add" size="md" title="Add Flight" onChange={()=>{}} onClick={this.newFlight}/>                          
                        </form>    
                    </div>    
                </Panel>                
                <Notifications/>                                   
            </div>
        )
    }
}

export default AddFlightForm;