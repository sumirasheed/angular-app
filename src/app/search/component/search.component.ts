import { Component, OnInit } from '@angular/core';
import { getDataService } from '../../weather/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: '../view/search.component.html',
  styleUrls: ['../view/css/search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public getDataService: getDataService) { }
  searchValue:any;
  data:any = [];
  ngOnInit(): void {

  }

  onClickSubmit(value:any){
    this.searchValue = value.location;
    console.log(value.location);
    this.getDataService.getDataByLoc(this.searchValue).subscribe(response=>{
      this.data= response;
    });

  }

}
