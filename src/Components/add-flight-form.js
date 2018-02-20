import React ,{Component} from 'react'
import Panel from './panel'
import {Input} from './input'
import {Button} from './button'

class AddFlightForm extends Component{

    constructor(props){
        super(props);
    }

    onCargoChange(e){
        
    }

    onInternationalChange(){
        
    }


    render(){
        return(
            <div className="form-center">                
                <Panel title="Add new Flight Log">
                    <div className="col-md-6">
                        <label>Origon Airport:</label>               
                        <Input onChange={()=>{}}/>
                        <label>Destination Airport:</label>               
                        <Input onChange={()=>{}}/>                    
                        <Input type="checkbox" label="Cargo" value={false} onChange={this.onCargoChange}/>                                                
                        <Input type="checkbox" label="International" onChange={this.onInternationalChange}/>      
                        <hr/>
                        <Button type="add" size="md" title="Add Flight" onChange={()=>{}}/>                                            
                    </div>    
                </Panel>
            </div>
        )
    }
}

export default AddFlightForm;