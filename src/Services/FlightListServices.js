import FirebaseService from './firebase'

const FlightListService = {
    getFlightList:()=>{
        let data = FirebaseService.getFlightsRef().once('value');
        return data.then((response)=>{  
            let flights = [];                
            response.forEach(function(item) {
                flights.push(item.val());
            });            
            if(flights){                
                return  flights.length > 0 ? flights : [] ;                             
            }else{
                return [];
            }                                      
        });          
    },

    addFlight:function (flight) {                
        FirebaseService.addFlight(flight);      
    }
}

export default FlightListService;


