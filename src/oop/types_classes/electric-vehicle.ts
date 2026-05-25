import {Vehicle} from "./class";

// A child class can reuse public and protected members from Vehicle.
export class ElectricVehicle extends Vehicle {
    public batteryPercentage: number;

    constructor(
        name: string,
        model: string,
        year: number,
        brand: string,
        batteryPercentage: number,
    ) {
        // super() calls the constructor from the parent class: Vehicle.
        super(name, model, year, brand);
        this.batteryPercentage = batteryPercentage;
    }

    public charge(): string {
        this.batteryPercentage = 100;
        return `${this.name} battery is fully charged`;
    }

    public getElectricVehicleInfo(): string {
        // "year" and "getModel()" are protected, so they are available here.
        return `${this.name} ${this.getModel()} was built in ${this.year}`;

        // This would fail because "brand" is private in Vehicle:
        // return this.brand;
    }
}
