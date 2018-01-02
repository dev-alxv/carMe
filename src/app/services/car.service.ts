import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';


@Injectable()
export class CarService {

  constructor(private router: Router) {

  }

  public getLocalCars(): Car[] {
    const localStorageItem = JSON.parse(localStorage.getItem('localCars'));
    return localStorageItem === null ? [] : localStorageItem.localCars;
  }

  public editLocalStorageCar(id: number) {
    const editingCar = this.getLocalCarByID(id);
    return editingCar;
  }

  public getLocalCarByID(id: number): Car {
    const localStorageItem = JSON.parse(localStorage.getItem('localCars'));
    const editingCarID = id;

    for (let i = 0; i < localStorageItem.localCars.length; i++) {
      const editingCar = localStorageItem.localCars[i];

      if (editingCar.id === editingCarID) {
        const spl = localStorageItem.localCars.splice(i, 1);
        this.setLocalStorageCars(localStorageItem.localCars);
        return editingCar;
      }
    }

  }

  public setLocalStorageCars(localCars: Car[]): void {
    localStorage.setItem('localCars', JSON.stringify({localCars: localCars}));
  }

  public removeLocalStorageCar(id: number): void {
    let localCars = this.getLocalCars();
    localCars = localCars.filter((car) => car.id !== id);
    this.setLocalStorageCars(localCars);
  }

  public clearLocalStorageCars(): void {
    const localCars = this.getLocalCars();
    localCars.length = 0;
    this.setLocalStorageCars(localCars);
  }

}
