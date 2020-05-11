import { Component, OnInit, OnChanges } from '@angular/core';
import { getDataService } from '../services/weather.service';
import { RootObject } from '../interface/weather';

@Component({
  selector: 'app-weather',
  templateUrl: '../view/weather.component.html',
  styleUrls: ['../view/css/weather.component.css']
})
export class WeatherComponent implements OnInit,OnChanges {

    Weatherdata:RootObject;
    currLng:any;
    currLat:any;
    isWeatherData=false;
    constructor(public getDataService: getDataService) {}

    ngOnInit() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.currLat = position.coords.latitude;
          this.currLng = position.coords.longitude;

          this.getDataService.getDataByGeo(this.currLat,this.currLng).subscribe(response=>{
            response.list.map((item,index)=>{
                this.Weatherdata.list.map((it,i)=>{
                  it.dt_txt = item.dt_txt;
                  it.main.temp = item.main.temp;
                  it.weather[0].icon = item.weather[0].icon;
                });
            });
          });
        });
      }
    }

    ngOnChanges(){

      if(this.Weatherdata!==null && this.Weatherdata!==undefined){
        this.isWeatherData = true;
      }
    }
}
