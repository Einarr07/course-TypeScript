"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electric_vehicle_1 = require("./electric-vehicle");
const tesla = new electric_vehicle_1.ElectricVehicle('Electric car', 'Model Y', 2025, 'Tesla', 75);
console.log(tesla.drive());
console.log(tesla.charge());
console.log(tesla.getElectricVehicleInfo());
console.log(tesla.getVehicleInfo());
