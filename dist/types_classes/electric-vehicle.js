"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricVehicle = void 0;
const class_1 = require("./class");
// A child class can reuse public and protected members from Vehicle.
class ElectricVehicle extends class_1.Vehicle {
    constructor(name, model, year, brand, batteryPercentage) {
        // super() calls the constructor from the parent class: Vehicle.
        super(name, model, year, brand);
        this.batteryPercentage = batteryPercentage;
    }
    charge() {
        this.batteryPercentage = 100;
        return `${this.name} battery is fully charged`;
    }
    getElectricVehicleInfo() {
        // "year" and "getModel()" are protected, so they are available here.
        return `${this.name} ${this.getModel()} was built in ${this.year}`;
        // This would fail because "brand" is private in Vehicle:
        // return this.brand;
    }
}
exports.ElectricVehicle = ElectricVehicle;
