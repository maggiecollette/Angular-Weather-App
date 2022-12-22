import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {WeatherAPIService} from "../weather-api.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherAPIService
) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPI(formValues: { location: string; }) {
    this.weatherService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data);
  }
}
