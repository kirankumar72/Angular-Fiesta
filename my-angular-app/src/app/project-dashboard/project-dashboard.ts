
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherApp } from '../weather-app/weather-app';
import { CalculatorApp } from '../calculator-app/calculator-app';
import { ToDoList } from '../to-do-list/to-do-list';
import { ImageGenerator } from '../image-generator/image-generator';
import { GoogleForm } from '../google-form/google-form';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'app-dashboard',
  standalone : true,
  imports : [CommonModule, WeatherApp,CalculatorApp, ToDoList, ImageGenerator,GoogleForm, LoginPage],
  templateUrl: './project-dashboard.html',
  styleUrls: ['./project-dashboard.css']
})
export class DashboardComponent {
  selectedProject: string | null = null;

  projects = [
    {
      id: 'calculator',
      title: 'Calculator App',
      image: 'images/calculator.jpg'
    },
    {
      id: 'todo',
      title: 'To-Do List App',
      image: 'images/todo.jpg'
    },
    {
      id: 'weather',
      title: 'Weather App',
      image: 'images/weather.jpg'
    },
    {
      id: 'imagegen',
      title: 'Image Generator',
      image: 'images/imagegen.jpg'
    },
    {
      id: 'form',
      title: 'Google Form Clone',
      image: 'images/form.jpg'
    },
    {
      id: 'login',
      title: 'Login Page',
      image: 'images/login.jpg'
    }
  ];

  showProject(projectId: string) {
    this.selectedProject = projectId;
  }

  backToDashboard() {
    this.selectedProject = null;
  }
}
