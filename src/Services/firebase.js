const FirebaseService =  {
    getDatabase: function () {
        return window.firebase.database();
    },

    getFlightsRef: function () {        
        return this.getDatabase().ref("flights");
    },

    getFlights:function () {
        return new Promise((resolve,reject)=>{
            this.getFlightsRef().on('value',(response)=>{            
                let flights = [];
                response.forEach(function(item) {                
                    flights.push(item.val());
                });                
                if(flights){ 
                    return  flights.length > 0 ? resolve(flights) : resolve([]) ;                             
                }else{
                    return resolve([]);
                }   
            });
            
        });        
    },

    addFlight:function (flight) {
        let newFlightRef = this.getFlightsRef().push();            
        flight.id = newFlightRef.key;            
        newFlightRef.set(flight);  
    },

    updateFlight:function (flight) {                
        this.getFlightsRef().child(flight.id).update(flight);
    },

    deleteFlight:function (flight) {                        
        this.getFlightsRef().child(flight.id).remove();
    }

}

export default FirebaseService;