/*Approach #2: Subclass VehicleFactory to create a factory class that builds Trucks*/

var movingTruck = carFactory.createVehicle( {
                      vehicleType: "truck",
                      state: "like new",
                      color: "red",
                      wheelSize: "small" } );
 
// Test to confirm our truck was created with the vehicleClass/prototype Truck
 
// Outputs: true
console.log( movingTruck instanceof Truck );
 
// Outputs: Truck object of color "red", a "like new" state
// and a "small" wheelSize
console.log( movingTruck );