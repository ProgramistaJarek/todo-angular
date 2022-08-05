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
   */
  addTask(task: string, index: number) {
    this.todos.push({ id: index, name: task, done: false });
  }

  /**
   * change task done
   * @param task is a task object
   */
  changeDone(task: Todos) {
    this.todos.filter((e) => {
      if (e.id === task.id) {
        e.done = !e.done;
        e.done === true
          ? (e.doneCreated = new Date())
          : (e.doneCreated = e.doneCreated);
      }
    });
  }

  /**
   * deleting task from array through comparing a names
   * @param task is a task object
   */
  deleteTask(task: Todos) {
    const newTasksArray = this.todos.filter((e) => e.id !== task.id);
    this.todos = newTasksArray;
  }
}
