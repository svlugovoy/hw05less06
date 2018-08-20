import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../../models/todo';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoId: number;
  todo: Todo;
  isReadOnly = true;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.todoId = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodoById(this.todoId).subscribe((resp: Todo) => {
      this.todo = resp;
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
    this.spinner.show();
    this.isReadOnly = true;
    this.todoService.getTodoById(this.todoId).subscribe((resp: Todo) => {
      this.todo = resp;
      this.toastr.info('Update is canceled.', 'Canceled!');
    },
      (error) => {
        this.toastr.error(error.message, 'Error!');
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      });
  }

  onEdit() {
    this.spinner.show();
    this.isReadOnly = true;
    const updatedTodo = Object.assign({}, this.todo);
    this.todoService.editTodo(updatedTodo).subscribe((resp: Todo) => {
      this.router.navigate(['/']);
      this.toastr.success('Post updated. ' + JSON.stringify(resp), 'Updated!');
    },
      (error) => {
        if (this.todoId > 200) {
          this.toastr.error('Not implemented. Fake server!', 'Error!');
        } else {
          this.toastr.error(error.message, 'Error!');
        }
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      });
  }
}
