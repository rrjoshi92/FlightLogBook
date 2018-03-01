const FirebaseService =  {
    getDatabase: function () {
        return window.firebase.database();
    },

    getFlightsRef: function () {        
        return this.getDatabase().ref("/flights");
    },

    addFlight:function (flight) {
        let newFlightRef = this.getFlightsRef().push();            
        flight.id = newFlightRef.key;            
        newFlightRef.set(flight);  
    }
}

export default FirebaseService;