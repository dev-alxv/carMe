import { Component, OnInit, NgModule, AfterContentInit, Renderer2, ViewChild, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.less'],
  providers : [ CarService ]
})

export class CarInfoComponent implements OnInit, AfterContentInit {

  title = 'Create a new car';
  formTitle = '';
  formButt = 'Add Car';

  private id: number;
  private brand: string;
  private model: string;
  private description: string;
  private registrationNumber: any;
  private fuelTypes: string[] = [ 'Petrol', 'Diesel', 'Electric' ];
  private fuelType: string;
  private transmissions: string[] = [ 'Manual', 'Automatic', 'Semi-Automatic' ];
  private transmission: string;

  brandF = new FormControl('', [Validators.required]);
  modelF = new FormControl('', [Validators.required]);
  regNumberF = new FormControl('', [Validators.required]);
  fuelF = new FormControl('', [Validators.required]);
  transmissionF = new FormControl('', [Validators.required]);
  formValidation = new FormControl('', [Validators.required]);

  private brandError = 'Please enter car brand';
  private modelError = 'Please enter car model';
  private regNumberError = 'Please enter registration number';
  private fuelError = 'Please select fuel type';
  private transmissionError = 'Please select transmission type';

  constructor(private carService: CarService, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {

    const randomId = Math.floor(Math.random() * 2000 / 2 * 33);
    this.id = randomId;

  }

  @ViewChild('overlaysubmited') divOverLay;
  @ViewChild('carformh2') carFormH2;
  @ViewChild('topper') topper;

  ngOnInit() {

  }

  ngAfterContentInit() {
    const sub = this.route.params.subscribe(params => {
      this.runFirst(params['carId']);
    });
  }

  private submitCar (carForm: NgForm): void {
    if (carForm.valid) {

      // tslint:disable-next-line:max-line-length
      const newCar = new Car(this.id, carForm.form.value.brand, carForm.form.value.model, carForm.form.value.description, carForm.form.value.registrationNumber, carForm.form.value.fuelType, carForm.form.value.transmission);

      // Get the current local storage items
      const localCars = this.carService.getLocalCars();
      // Push the new car
      localCars.push(newCar);
      // Return to local storage
      this.carService.setLocalStorageCars(localCars);

      this.renderer.addClass(
        this.divOverLay.nativeElement,
        'form-submited'
      );
      setTimeout(() => {
        this.renderer.removeClass(
          this.divOverLay.nativeElement,
          'form-submited'
        );
        this.router.navigateByUrl('');
      }, 2000);

    }
  }

  runFirst(carId: number) {
    // Editing car
    if (carId != null) {
      const carIdNumber = Number(carId);
      const thisCar = this.carService.editLocalStorageCar(carIdNumber);
      this.title = 'Edit a car';
      this.formTitle = 'Editing car:';
      this.formButt = 'Save Car';
      this.id = thisCar.id;
      this.brand = thisCar.brand;
      this.model = thisCar.model;
      this.description = thisCar.description;
      this.registrationNumber = thisCar.registrationNumber;
      this.fuelType = thisCar.fuelTypes;
      this.transmission = thisCar.transmission;

      this.renderer.setStyle(
        this.carFormH2.nativeElement,
        'display',
        'block'
      );
      this.renderer.addClass(
        this.topper.nativeElement,
        'editing-car'
      );
    }
  }

  public editThisCar(id: number): void {
    this.router.navigateByUrl('/edit-car/' + id + '');
  }

}
