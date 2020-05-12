import { Component, OnInit } from '@angular/core';
import { getDataService } from '../services/weather.service';
import { RootObject } from '../interface/weather';

@Component({
  selector: 'app-weather',
  templateUrl: '../view/weather.component.html',
  styleUrls: ['../view/css/weather.component.css']
})
export class WeatherComponent implements OnInit {

    Weatherdata:RootObject;
    currLng:any;
    currLat:any;
    isWeatherData=false;

    constructor(public getDataService: getDataService) {}

    ngOnInit() {
      this.Weatherdata = {
        list: [],
        city: {name: ''}
      }
      //Get data by current location lat and log
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.currLat = position.coords.latitude;
          this.currLng = position.coords.longitude;
          this.getDataService.getDataByGeo(this.currLat, this.currLng).subscribe(response => {
            this.Weatherdata.city.name = response.city.name;
            if (response.list){
              response.list.map((item, index) => {
                this.Weatherdata.list.push(item);
              });
            }
          });
        });
      }
      if(this.Weatherdata!==null && this.Weatherdata!==undefined){
        this.isWeatherData = true;
      }
    }

    //Get data by location
    onLocationUpdate(location){
      this.Weatherdata = {
        list: [],
        city: {name: ''}
      }
      console.log("sj");
      this.getDataService.getDataByLoc(location).subscribe(response => {
        this.Weatherdata.city.name = response.city.name;
        if (response.list){
          response.list.map((item, index) => {
            this.Weatherdata.list.push(item);
            console.log(this.Weatherdata.list);
          });
        }
      });
    }
}
