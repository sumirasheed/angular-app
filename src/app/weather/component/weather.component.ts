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
    isData=false;
    currLng:any;
    currLat:any;
    data:any=[];
    isWeatherData=false;
    isCurrentData=false;

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
          this.getDataService.getCurrentDataByGeo(this.currLat, this.currLng).subscribe(response => {
              this.data = response;
          });
        });
      }
      if(this.Weatherdata!==null && this.Weatherdata!==undefined){
        this.isWeatherData = true;
        this.isData = false;
      }
      if(this.data!==null && this.data!==undefined){
        console.log(this.data)
        this.isCurrentData = true;
        this.isData = false;
      }
      else{
        this.isCurrentData = false;
      }
    }

    //Get data by location
    onLocationUpdate(location){
      this.Weatherdata = {
        list: [],
        city: {name: ''}
      }
      this.data=[];
      this.getDataService.getDataByLoc(location).subscribe(
        response => {
        this.isData = false;
        this.Weatherdata.city.name = response.city.name;
        if (response.list){
          response.list.map((item, index) => {
            this.Weatherdata.list.push(item);
          });
        }
      },
      (err) => {
        this.isData = true;
      });

      this.getDataService.getCurrentDataByLoc(location).subscribe(response => {
        this.data = response;
      });
    }
  }
