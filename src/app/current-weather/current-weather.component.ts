import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {WeatherAPIService} from "../weather-api.service";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {
  public weatherSearchForm: FormGroup;
  public forecastData: any;
  private weather$: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherAPIService
) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  ngOnDestroy() {
    this.weather$.unsubscribe();
  }

  sendToForecastAPI(formValues: { location: string; }) {
    this.weather$ = this.weatherService
      .getForecast(formValues.location)
      .pipe(tap((data) => {
        this.forecastData = data
        console.log(data);
      }))
      .subscribe();
  }
}
