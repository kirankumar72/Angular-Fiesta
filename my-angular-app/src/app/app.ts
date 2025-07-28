import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./project-dashboard/project-dashboard";



@Component({
  standalone :true,
  selector: 'app-root',
  imports: [RouterModule, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
