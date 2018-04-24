import FirebaseService from './firebase'

const FlightListService = {
    getFlightList:()=>{       
        return new Promise((resolve,reject)=>{                                                
            resolve(FirebaseService.getFlights());
        });        
    },

    addFlight:function (flight) {                
        FirebaseService.addFlight(flight);      
    },

    updateFlight:function (flight) {
        return new Promise((resolve,reject)=>{
            resolve(FirebaseService.updateFlight(flight));
        });        
    },

    deleteFlight:function (flight) {
        return new Promise((resolve,reject)=>{
            resolve(FirebaseService.deleteFlight(flight));
        });        
    },
}

export default FlightListService;


