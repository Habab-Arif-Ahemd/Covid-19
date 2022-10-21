import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AffectedCountriesComponent} from '../app/components/affected-countries/affected-countries.component'
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
 routes: Routes = [
  { path: 'Countries', component: AffectedCountriesComponent },
];
}
