import { Component, Injectable } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/anfi.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AddTaskComponent {
  task: Task = new Task();
  submitted = false;

  constructor(private taskService: TaskService) {}

  saveTask(): void {
    this.taskService.create(this.task).then(() => {
      console.log('Create new task successfully!');
      this.submitted = true;
    });
  }

  newTask(): void {
    this.submitted =false;
    this.task = new Task();
  }

}
