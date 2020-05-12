import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { getDataService } from '../../weather/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: '../view/search.component.html',
  styleUrls: ['../view/css/search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() eventPlaceUpadate = new EventEmitter<string>();

  constructor(public getDataService: getDataService) { }

  searchValue: any;
  data: any = [];

  ngOnInit(): void {

  }

  //Search button click function
  onClickSubmit(value: any){
    this.placeUpadate(value);
  }

  //emitting location update function
  placeUpadate(location: string): void {
    this.eventPlaceUpadate.emit(location);
  }
}
