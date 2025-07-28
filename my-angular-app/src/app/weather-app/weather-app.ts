import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-app',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather-app.html',
  styleUrl: './weather-app.css'
})
export class WeatherApp {
city :string= "Goa";
key = "7cba3ad427a23a394f9aac5e2640dd16";
weather :string[]= []
temp = "";
desc = "";
feels_like= "";
humidity = "";
wind = "";
main ="";
showImage = "default.png";
constructor(private http : HttpClient){}


getWeather(){
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`;
  this.http.get<any>(url).subscribe(
  (response)=>{
  console.log(response);
  if(response){
  this.temp = (response.main.temp -273.15).toFixed(2);
  this.humidity = response.main.humidity;
  this.main= response.weather[0].main;
  this.desc = response.weather[0].description;
  this.wind = response.wind.speed;
 

  if(this.desc.includes('clear')){
  this.showImage ='sunny.png';
  }
  else if(this.desc.includes('cloud')){
 this.showImage ='cloud.jpg';
  }
  else if(this.desc.includes('rain')){
     this.showImage ='rain.png';
  }
  else if(this.desc.includes('snow')){
     this.showImage ='snow.png';
  }
  
  else if(this.desc.includes('thunderstorm')){
     this.showImage ='thuderstorm.png';
  }
  else if(this.desc.includes('fog')||(this.desc.includes('mist'))){
     this.showImage ='fog.png'; 
  }
}
},
 (error) => {
  console.error(error);
    alert("You entered a wrong city name or data could not be retrieved.");
  
 }
)
}
}
