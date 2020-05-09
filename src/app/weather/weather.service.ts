import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class getDataService {
  constructor(private http: HttpClient){}

  getData(currLat,currLng){
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?lat='+currLat+'&lon='+currLng+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565');
  }
}
