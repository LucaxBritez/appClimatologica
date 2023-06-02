import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent  implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  getWeather(city: string){
    this.weatherService.getWeather(city).subscribe((Response)=>{
      this.weatherData = Response.data;
      console.log(this.weatherData);
    })
  }

}
