"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
const electric_vehicle_1 = require("./electric-vehicle");
const car1 = new class_1.Vehicle('Car', 'Corolla', 2001, 'Toyota');
// Public properties are available outside the class.
console.log(car1.name);
console.log(car1.model);
// Public methods are available outside the class.
console.log(car1.drive());
console.log(car1.getVehicleInfo());
console.log(car1.getShortDescription());
// Private values cannot be accessed directly, but public methods can work with them.
car1.changeBrand('Honda');
console.log(car1.getVehicleInfo());
// Protected and private members are intentionally blocked outside the class.
// Uncomment these lines to see the TypeScript errors:
// console.log(car1.year);
// console.log(car1.brand);
// console.log(car1.getModel());
const electricCar = new electric_vehicle_1.ElectricVehicle('Electric car', 'Model 3', 2024, 'Tesla', 80);
console.log(electricCar.drive());
console.log(electricCar.charge());
console.log(electricCar.getElectricVehicleInfo());
// The child class receives the public methods from Vehicle.
console.log(electricCar.getVehicleInfo());
