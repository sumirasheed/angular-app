import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    title = 'image-gallery';
    private data:any = [];
    private parsedData;
    constructor(private http: HttpClient) {

    }

    ngOnInit() {
      const url ='http://dataservice.accuweather.com/locations/v1/adminareas/countryCode?apikey=%0943c9I4Qe8GTCaurfUXuZN8fq4TIZMrFI';
    // this.http.get(url).subscribe((res)=>{
    //   this.data = res
    //   console.log("data" + res)
    // })


      this.data = this.http.get(url);

      // this.parsedData = JSON.parse(this.data);
      console.log("Data :" , this.data);


    }

}
