import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const route: string = "https://covid-193.p.rapidapi.com/";

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "5c6eae8fb8msh1550c24d68d4ca1p11877bjsnd6aba199d388"
});
@Injectable({
  providedIn: 'root'
})

export class GetApiDataService {

  constructor(private http: HttpClient) { 
  }
  
  getCountries() {
    let url="countries"
    return  this.http.get(route + url,{headers:headers});
  }
  getStatistics() {
    let url="statistics"
    return  this.http.get(route + url,{headers:headers});
  }
  getHistory( country: string) {
    return  this.http.get(route +"history?country="+country ,{headers:headers});
  }
  

}
