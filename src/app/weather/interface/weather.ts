  export interface Main {
      temp: number;
  }

  export interface Weather {
      icon: string;
  }

  export interface List {
      main: Main;
      weather: Weather[];
      dt_txt: string;

  }

  export interface City {
      name: string;
  }

  export interface RootObject {
      list: List[];
      city: City;
  }

