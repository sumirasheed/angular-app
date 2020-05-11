import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RootObject } from '../interface/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class getDataService {

  constructor(private http: HttpClient){}

  getDataByGeo(currLat,currLng):Observable<RootObject[]>{

      return this.http.get<RootObject[]>('http://api.openweathermap.org/data/2.5/forecast?lat='+currLat+'&lon='+currLng+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565')

  }

  getDataByLoc(location):Observable<RootObject[]>{

      return this.http.get<RootObject[]>('http://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=ae285e4043ac05fcbdf2d77e1f4b2565');

  }
}
