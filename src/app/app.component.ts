import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatSpinner } from '@angular/material';

@NgModule({
  imports: [
    MatSpinner
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

}
