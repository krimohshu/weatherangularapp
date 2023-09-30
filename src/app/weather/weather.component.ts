import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  maxTemp: number = 0;
  minTemp: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'london';
  units: string = 'metric';
  cityName: string = 'London';
  windDegre: number = 0;
  speedWind: number = 0;

  hours = Date.now();
  today = Date.now();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''; 
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.city = this.cityName;
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName, this.units)
    .subscribe({
      next: (res) => {
        // console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }

}
