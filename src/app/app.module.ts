import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CarService } from './services/car.service';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarInfoComponent } from './car-info/car-info.component';
import {
  MatButtonModule,
  MatCardModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatPaginatorModule
} from '@angular/material';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'add-car', component: CarInfoComponent},
  {path: 'edit-car/:carId', component: CarInfoComponent}
];

@NgModule({
  exports: [
    CdkTableModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarInfoComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ConfirmModalComponent,
    CarInfoComponent
  ],
  providers: [CarService, CarInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
