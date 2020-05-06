import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient){}

  fetchWeather(){
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=thrissur&appid=ae285e4043ac05fcbdf2d77e1f4b2565');
  }
}
