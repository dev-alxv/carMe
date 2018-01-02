import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../services/car.service';
import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { CarInfoComponent } from '../car-info/car-info.component';
import { MatDialog, MatDialogRef, PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less'],
  providers : [ CarService, CarInfoComponent ]
})
export class CarComponent implements OnInit {

  title = 'Showroom';
  curPage: number;
  pageSize: number;

  constructor(private carService: CarService, public carInfo: CarInfoComponent, public dialog: MatDialog) {
    this.curPage = 1;
    this.pageSize = 10;
  }

  ngOnInit() {

  }

  confirmRemoveCar(id: number): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {rel: 'remove-this-car', selectedCarId: id},
      autoFocus: false,
      width: '260px'
    });
  }

  confirmRemoveAllCars(): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {rel: 'remove-all-cars'},
      autoFocus: false,
      width: '260px'
    });
  }

  numberOfPages() {
    return Math.ceil(this.carService.getLocalCars().length / this.pageSize);
  }

}
