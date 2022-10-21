import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AffectedCountriesComponent } from './components/affected-countries/affected-countries.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule ,NgChartsConfiguration } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CommonModule } from '@angular/common';

const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    AffectedCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,HttpClientModule,NgSelectModule, FormsModule,NgChartsModule,ReactiveFormsModule,
    [RouterModule.forRoot(routes)]

  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ], bootstrap: [AppComponent]
  
})
export class AppModule { 
  
}
