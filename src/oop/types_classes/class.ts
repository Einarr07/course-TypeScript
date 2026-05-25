export class Vehicle {
    // public: Can be read and changed from anywhere.
    // This is useful for information that other files are allowed to use directly.
    public name: string;
    public model: string;

    // protected: Can be used inside this class and inside child classes.
    // Code outside the class cannot access this property directly.
    protected year: number;

    // private: Can be used only inside this class.
    // Even child classes cannot access this property directly.
    private brand: string;

    constructor(name: string, model: string, year: number, brand: string) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.brand = brand;
    }

    // public method: This is part of the public API of the class.
    // Any file that creates a Vehicle can call this method.
    public drive(): string {
        return `I'm driving a ${this.name}`;
    }

    // public method that exposes private information in a controlled way.
    // The property "brand" is private, but this method decides how to show it.
    public getVehicleInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }

    // public method that changes private information safely.
    public changeBrand(newBrand: string): void {
        this.brand = newBrand;
    }

    // protected method: Only Vehicle and classes that extend Vehicle can call it.
    protected getModel(): string {
        return this.model;
    }

    // private method: Only Vehicle can call it.
    private getBrand(): string {
        return this.brand;
    }

    // Example of using a private method inside the same class.
    public getShortDescription(): string {
        return `${this.getBrand()} ${this.name}`;
    }
}
