import { Injectable } from '@angular/core';
import { Todos } from '../Todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todos[] = [
    { id: 1, name: 'task1', done: false },
    { id: 2, name: 'task2', done: false },
    { id: 3, name: 'task3', done: false },
    { id: 4, name: 'task4', done: false },
    {
      id: 5,
      name: 'task5 najdłuższy jaki się da zrobić w celu przetestowania',
      done: false,
    },
  ];

  constructor() {}

  /**
   * @returns array of todos
   */
  getTodos(): Todos[] {
    return [...this.todos];
  }

  /**
   * adding task to the todos array
   * @param task name of the task to add
   * @param index task id
   * @param date deadline
   */
  addTask(task: string, index: number, date: Date) {
    this.todos.push({ id: index, name: task, done: false, deadline: date });
  }

  /**
   * change task done
   * @param index task id
   */
  changeDone(index: number) {
    this.todos.filter((e) => {
      if (e.id === index) {
        e.done = !e.done;
        e.done === true
          ? (e.doneCreated = new Date())
          : (e.doneCreated = e.doneCreated);
      }
    });
  }

  /**
   * deleting task from array through comparing a names
   * @param index task id
   */
  deleteTask(index: number) {
    const newTasksArray = this.todos.filter((e) => e.id !== index);
    this.todos = newTasksArray;
  }

  /**
   * Update task name and deadline
   * @param index task id
   * @param taskName new task name
   * @param newDate new date
   */
  updateTask(index: number, taskName: string, newDate: Date) {
    return this.todos.filter((e) => {
      e.id === index ? ((e.name = taskName), (e.deadline = newDate)) : null;
    });
  }
}
