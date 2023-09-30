import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string) {
    return this.http.get('http://localhost:8181/getweatherinfo?location='+ city );
  }
}
