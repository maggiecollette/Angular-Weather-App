import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {WeatherAPIService} from "../weather-api.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public currentData: any;
  public forecastData: any;
  private weather$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherAPIService
  ) {
  }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToCurrentAPI(formValues: { location: string; }) {
    this.weather$ = this.weatherService
      .getWeather(formValues.location)
      .pipe(tap((data) => {
        this.currentData = data
      }))
      .subscribe();
  }

  sendToForecastAPI(formValues: { location: string; }) {
    this.weather$ = this.weatherService
      .getForecast(formValues.location)
      .pipe(tap((data) => {
        this.forecastData = data
      }))
      .subscribe();
  }
}
