import { Component, OnInit } from '@angular/core';
import { getDataService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    data:any = [];
    currLng:any;
    currLat:any;
    constructor(private getDataService: getDataService) {}

    ngOnInit() {
      this.getDataService.getData(this.currLat,this.currLng).subscribe(response=>{
          this.data = response;
          console.log(this.data);
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
              this.currLat = position.coords.latitude;
              this.currLng = position.coords.longitude;
            });
          }
          console.log(this.currLat + this.currLng)
      });
    }
}
