import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherAPIService} from "./weather-api.service";
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HourlyForecastComponent} from './hourly-forecast/hourly-forecast.component';
import {WeatherPageComponent} from './weather-page/weather-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    SearchBarComponent,
    HourlyForecastComponent,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
