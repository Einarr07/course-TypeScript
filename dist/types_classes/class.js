"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(name, model, year, brand) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.brand = brand;
    }
    // public method: This is part of the public API of the class.
    // Any file that creates a Vehicle can call this method.
    drive() {
        return `I'm driving a ${this.name}`;
    }
    // public method that exposes private information in a controlled way.
    // The property "brand" is private, but this method decides how to show it.
    getVehicleInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
    // public method that changes private information safely.
    changeBrand(newBrand) {
        this.brand = newBrand;
    }
    // protected method: Only Vehicle and classes that extend Vehicle can call it.
    getModel() {
        return this.model;
    }
    // private method: Only Vehicle can call it.
    getBrand() {
        return this.brand;
    }
    // Example of using a private method inside the same class.
    getShortDescription() {
        return `${this.getBrand()} ${this.name}`;
    }
}
exports.Vehicle = Vehicle;
