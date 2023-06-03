import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class WeatherService{

    

    getWeather(city: string): Observable<any> {
        const apiKey = '6654885ebf4e60d58851987a48a3981b';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;
        return from(axios.get(url));
    }

      

}