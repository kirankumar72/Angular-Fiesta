import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  standalone :true,
  selector: 'app-create-new-acc',
  imports: [FormsModule, RouterModule],
  templateUrl: './create-new-acc.html',
  styleUrl: './create-new-acc.css'
})
export class CreateNewAcc {
user = {
  firstName : "",
  surName :"",
  dob : "",
  gender : "",
  mobileOrEmail :"",
  password : ""
}

constructor(private http: HttpClient){}
onSubmit(){
  this.http.post('http://localhost:3000/api/fbusers',this.user).subscribe(
    res => console.log("user saved",res),
    err => console.log("Error", err)
  );
}
}
