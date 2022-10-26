import { Component, ViewChild, } from '@angular/core';
import { GetApiDataService } from '../app/services/get-api-data.service'

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  title = 'Covid-19';
  Countries: [] = []
  Statistics: [] = []
  population: [] = []
  isLoadingCountries: boolean = false;
  isLoadingchart: boolean = false;

  /* for pagination */
  page = 20;
  pageSize = 8;
  /* for chart */
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { x: {}, y: { min: 10 } },
    plugins: {
      legend: { display: true, },
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [this.Countries];

  public barChartData: ChartData<'bar'> = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      { data: [], label: 'active cases ' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'new cases' }
    ]
  };





  constructor(private getApiDataService: GetApiDataService) { }

  ngOnInit(): void {
    console.log("app")
    this.showCountries();
    this.showStatistics();

  }


  showCountries() {
    this.isLoadingCountries = true;
    this.getApiDataService.getCountries().subscribe((Countries: any) => {
      this.isLoadingCountries = false;
      this.Countries = Countries.response;
      console.log("Countries", this.Countries);
    });  }


  showStatistics() {
    let country: string[] = [];
    let cases: string[] = [];
    let population: number[] = [];
    this.isLoadingchart=true;
    this.getApiDataService.getStatistics().subscribe((statistics: any) => {
      this.isLoadingchart=false;

      this.Statistics = statistics.response;
      this.Statistics.slice(-7).forEach((element, index) =>
        Object.keys(element).forEach(key => {
          if (key == "country") {
            country.push(element[key])
          }
          if (key == "population") {
            population.push(element[key])
          }
          if (key == "cases") {
            cases.push(element["cases"])
           
            Object.keys(cases).forEach(key => {
              if (key == "active") {
                console.log("i enter", key)
              }
            })

          }

        }));//end of forEach
      this.barChartPlugins = [this.Statistics];
      this.barChartData = {
        labels: country,

        datasets: [
          { data: population, label: 'active cases  ' },
          { data: [65, 59, 80, 81, 33, 90, 100], label: 'new  cases  ' },
        ]
      };

    });


  }
  /* for filter */
  onChange(selectedOptions: any) {
    if (selectedOptions == '') {
      this.showCountries();
    } else

      this.isLoadingCountries = true;
    this.Countries.length = 0;
    for (let i = 0; i < selectedOptions.length; i++) {
      this.getApiDataService.getCountries().subscribe((Countries: any) => {
        const result = Countries.response.find(
        );

      });
    }
    this.isLoadingCountries = false;
  }
}
