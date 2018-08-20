import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DataExchangeService} from '../../services/data-exchange.service';
import {ToastrService} from 'ngx-toastr';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('f') f: FormGroup;

  todo: Todo = {
    userId: 1,
    title: '',
    completed: false
  };

  constructor(
    private todoService: TodoService,
    private dataExchangeService: DataExchangeService,
    private router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  onAddNewTodo() {
    const newTodo: Todo = {
      userId: 1,
      title: this.todo.title,
      completed: this.todo.completed
    };
    this.spinner.show();
    this.todoService.createTodo(newTodo).subscribe((resp) => {
        this.dataExchangeService.emitAddTodoEvent(resp);
        this.router.navigate(['/']);
        this.toastr.success('Todo created.', 'Created!');
      },
      (error) => {
        this.toastr.error(error.message, 'Error!');
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      });

  }

  onCancel() {
    this.f.reset();
  }

}
