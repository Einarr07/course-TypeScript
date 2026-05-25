import {ElectricVehicle} from "./electric-vehicle";

// Creating an object from the ElectricVehicle class.
// The values inside the parentheses are sent to the constructor.
const tesla = new ElectricVehicle('Electric car', 'Model Y', 2025, 'Tesla', 75);

// drive() comes from the parent class Vehicle.
console.log(tesla.drive());

// charge() belongs to ElectricVehicle and changes the battery to 100.
console.log(tesla.charge());

// This method uses information from the child class and the parent class.
console.log(tesla.getElectricVehicleInfo());

// getVehicleInfo() comes from Vehicle, but the ElectricVehicle object can use it
// because ElectricVehicle extends Vehicle.
console.log(tesla.getVehicleInfo());
