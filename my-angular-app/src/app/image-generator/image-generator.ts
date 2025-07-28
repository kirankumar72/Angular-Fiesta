
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './image-generator.html',
  styleUrls: ['./image-generator.css']  // ✅ FIX: 'styleUrl' ➜ 'styleUrls'
})
export class ImageGenerator {
 query = "";
 key = "WwJOLkemBXFrLrs91VGUKpH8RF9tGzigbqIQgaIJEsiExCg8gPywN0v7";
 images :any[] = [];
 nextpage :string |null = null;
 constructor(private http : HttpClient){};
 searchImg(){
  this.images = [];
  const url =  `https://api.pexels.com/v1/search?query=${this.query}&per_page=5`; 
 const headers = {'Authorization': this.key};
 this.http.get<any>(url,{headers}).subscribe((response)=>{
  console.log(response);
  this.images = response.photos;
  this.nextpage = response.next_page || null;
  console.log(this.images);
 })

 }

 addImg(){
 if(!this.nextpage) return;
 const headers  = {'Authorization':this.key};
 this.http.get<any>(this.nextpage ,{headers}).subscribe((response)=>{
  this.images.push(...response.photos);
  this.nextpage = response.next_page||null;
 })

 }




}
