import { Component, PipeTransform,OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common'; 
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetApiDataService } from 'src/app/services/get-api-data.service';

interface Country {
	country: string;
	flag: string;
	day: number;
	population: number;
}
/* initial values */
 let COUNTRIES: Country[] = [
	{
		country: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		day: 17075200,
		population: 146989754,
	},
	{
		country: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		day: 9976140,
		population: 36624199,
	},
	{
		country: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		day: 9629091,
		population: 324459463,
	},
	{
		country: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		day: 9596960,
		population: 1409517397,
	},
];
function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.country.toLowerCase().includes(term) ||
			pipe.transform(country.day).includes(term) ||
			pipe.transform(country.population).includes(term)
		);
	});
}
@Component({
  selector: 'app-affected-countries',
  templateUrl: './affected-countries.component.html',
  styleUrls: ['./affected-countries.component.css'],
  providers: [DecimalPipe],

  
})


export class AffectedCountriesComponent implements OnInit {
    MonthlyHistory:[]=[]


	
  ngOnInit(): void {

	this.showHistory();
  }
  showHistory(){
  this.getApiDataService.getHistory("china").subscribe((history: any) => {
    this.MonthlyHistory=history.response

	 COUNTRIES = history.response


}); }
	

    
    countries$: Observable<Country[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe,private getApiDataService:GetApiDataService) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}

}
