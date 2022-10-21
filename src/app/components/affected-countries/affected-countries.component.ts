import { Component, PipeTransform,OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
	name: string;
	flag: string;
	date: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		date: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		date: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		date: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		date: 9596960,
		population: 1409517397,
	},
];
function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term) ||
			pipe.transform(country.date).includes(term) ||
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
  ngOnInit(): void {
  }
  countries$: Observable<Country[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}

}
