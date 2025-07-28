import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone :true,
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage{
email :string ='';
password :string =''

constructor(private http :HttpClient, private router : Router){}
  login(){
this.http.post<any>('http://localhost:3000/api/fbusers/login',{
  email : this.email,
  password  : this.password
}).subscribe({
  next: (res)=>{
    if(res.success){
alert(res.message);
    this.router.navigate(['/homepage']);
    }else{
      alert(res.message);
    }
  },
  error: (err)=>{
    alert('Invalid email or password');
  }
})
  }
}
