// Driver class:

// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0; 
let passengerId = 0;
let tripId = 0;

//each time you create a 'driver' you need to push it into store
class Driver {
    constructor(name) {
        this.name = name;
        this.id = driverId++;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.driverId == this.id;
        });
    }
    passengers() {
        return store.trips.map(trip => {
            return trip.passenger();
        });
    }
}

// A passenger has many trips, and has many drivers through trips.
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a passenger has taken
// drivers() - returns all of the drivers that has taken a passenger on a trip

class Passenger {
    constructor(name) {
        this.id = passengerId++;
        this.name = name;
        store.passengers.push(this);
    };
    trips() {
        return store.trips.filter(trip => {
            return trip.passenger()
        })
    };
    drivers(){
        return store.trips.map(trip => {
            return trip.driver()
        })
    };
}
// Trip class:

// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that object has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip

class Trip {
    constructor (driver, passenger) {
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = tripId++;
        store.trips.push(this);
    }
    driver() {
        return store.drivers.find(driver => {
            return driver.id === this.driverId;
        });
    }
    passenger() {
        return store.passengers.find(passenger => {
            return passenger.id === this.passengerId;
        });
    }
}