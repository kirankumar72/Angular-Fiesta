import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css'
})
export class ToDoList {
task ="";
listOfTask :string[] =[];
addTask(){
  if(this.task.trim().length >0){
   this.listOfTask.push(this.task);
}
this.task ="";
  }

deleteTask(index :number){
  if(this.listOfTask){
this.listOfTask.splice(index, 1);
  }
}

updateTask(index :number){
if(this.listOfTask){
  const updatedTask = prompt('Enter new task value:', this.listOfTask[index]);
  if(updatedTask !=null && updatedTask.length >0){
    this.listOfTask[index] = updatedTask;
  }
}
}
}

