// task-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: string = ''; // Contient la nouvelle tâche à ajouter

  constructor(private taskService: TaskService) {}

  // Ajoute une nouvelle tâche
  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = ''; // Réinitialise le champ d'entrée
    }
  }
}
