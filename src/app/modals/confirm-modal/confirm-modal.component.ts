import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.less'],
  providers : [ CarService ]
})
export class ConfirmModalComponent {

  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private carService: CarService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
