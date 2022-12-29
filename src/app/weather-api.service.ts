import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {
  }

  getWeather(location: string) {
    return this.http.get(
      'https://api.weatherapi.com/v1/current.json', {params: {key: '82e6167bcaf44ada8f5145928222212', q: location}}
    );
  }

  getForecast(location: string) {
    return this.http.get(
      'https://api.weatherapi.com/v1/forecast.json', {params: {key: '82e6167bcaf44ada8f5145928222212', q: location}}
    )
  }
}
