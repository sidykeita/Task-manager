import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number, newTask: string): void {
    this.tasks[index] = newTask;
  }
} // Assure-toi que cette accolade fermante est présente
