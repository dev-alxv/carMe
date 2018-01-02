
export class Car {
    id: number;
    brand: string;
    model: string;
    description: string;
    registrationNumber: any;
    fuelTypes: string;
    transmission: string;

    // tslint:disable-next-line:max-line-length
    constructor(id: number, brand: string, model: string, description: string, registrationNumber: any, fuelTypes: string, transmission: string) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.registrationNumber = registrationNumber;
        this.fuelTypes = fuelTypes;
        this.transmission = transmission;
    }
}

