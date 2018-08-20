import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Todo} from '../models/todo';

@Injectable()
export class DataExchangeService {

  private todosCount: BehaviorSubject<number> = new BehaviorSubject(0);
  public currentTodosCount = this.todosCount.asObservable();

  private addTodo: BehaviorSubject<Todo> = new BehaviorSubject({ title: '', completed: false, userId: 1});
  public addTodoEvent = this.addTodo.asObservable();

  constructor() {}

  changeTodosCount(count: number) {
    this.todosCount.next(count);
  }

  emitAddTodoEvent(todo: Todo): void {
    this.addTodo.next(todo);
  }

}
