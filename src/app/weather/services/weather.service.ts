import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RootObject } from '../interface/weather';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class getDataService {

  constructor(private http: HttpClient){}

  //Get current data from geoloc
  getCurrentDataByGeo(currLat,currLng):Observable<RootObject>{
    return this.http.get<RootObject>('http://api.openweathermap.org/data/2.5/weather?lat='+currLat+'&lon='+currLng+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565')
  }

  //Get current data from loc
  getCurrentDataByLoc(location):Observable<RootObject>{
    return this.http.get<RootObject>('http://api.openweathermap.org/data/2.5/weather?q='+location+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565').pipe(catchError(this.errorHandler))
  }

  //Geo location
  getDataByGeo(currLat,currLng):Observable<RootObject>{
    return this.http.get<RootObject>('http://api.openweathermap.org/data/2.5/forecast?lat='+currLat+'&lon='+currLng+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565')
  }

  //By location
  getDataByLoc(location):Observable<RootObject>{
    return this.http.get<RootObject>('http://api.openweathermap.org/data/2.5/forecast?q='+location+'&cnt=10&appid=ae285e4043ac05fcbdf2d77e1f4b2565').pipe(catchError(this.errorHandler))
  }

  errorHandler(error) {
    return Observable.throw(error.message || "server error.");
  }
}
