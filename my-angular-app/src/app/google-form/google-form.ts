import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-google-form',
  imports: [FormsModule],
  templateUrl: './google-form.html',
  styleUrl: './google-form.css'
})
export class GoogleForm {
  user = {
    email: " ",
    firstName : " ",
    lastName : " ",
    gender :" ",
    education : " ",
    status : " ",
    experience : " ",
    date : " ",
    resume : " "
  }
  constructor(private http : HttpClient){}
onSubmit(){
this.http.post('http://localhost:3000/api/users', this.user).subscribe(
  res =>console.log("user saved", res),
  err =>console.log('Error :',err)
);
}

}

