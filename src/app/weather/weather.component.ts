import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Form } from '@angular/forms';

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
  cityName: string = 'london';
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
        console.log(res);
        if(res != null){
        this.myWeather = res;
        console.log(this.myWeather);
        }
      },
       error: (error) => {
        console.log(error.message);
        this.myWeather = null;
       },
       
      complete: () => console.info('API call completed')
      } );
  }
}
