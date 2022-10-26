import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GetApiDataService {

  constructor(private http: HttpClient) { 
  }
  
  getCountries() {
    let url="countries"
    return  this.http.get(environment.apiUrl + url,{headers:environment.headers});
  }
  getStatistics() {
    let url="statistics"
    return  this.http.get(environment.apiUrl + url ,{headers:environment.headers});
  }
  getHistory( country: string) {
    let url="history?country="
    return  this.http.get(environment.apiUrl + url + country ,{headers:environment.headers});
  }
  

}
