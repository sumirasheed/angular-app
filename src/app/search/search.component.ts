import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchValue:any;
  ngOnInit(): void {

  }

  onClickSubmit(value:any){
    this.searchValue = value;
    console.log(value.location);
  }

}
