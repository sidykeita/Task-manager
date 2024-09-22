// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: string[] = []; // Initialise tasks comme un tableau vide
 // Stocke les tâches récupérées du service
  isEditing: boolean[] = []; // Indique si une tâche est en cours d'édition
  editedTask: string = ''; // Contient la tâche en cours de modification

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Récupère les tâches du service lors de l'initialisation du composant
    this.tasks = this.taskService.getTasks();
    this.isEditing = new Array(this.tasks.length).fill(false);
  }

  // Active le mode édition pour une tâche
  editTask(index: number): void {
    this.isEditing[index] = true;
    this.editedTask = this.tasks[index];
  }

  // Enregistre les modifications d'une tâche
  saveTask(index: number): void {
    if (this.editedTask.trim()) {
      this.taskService.updateTask(index, this.editedTask.trim());
      this.isEditing[index] = false; // Désactive le mode édition
    }
  }

  // Annule l'édition d'une tâche
  cancelEdit(index: number): void {
    this.isEditing[index] = false;
  }

  // Supprime une tâche
  removeTask(index: number): void {
    this.taskService.removeTask(index);
    this.isEditing.splice(index, 1); // Met à jour l'état d'édition
  }
}
