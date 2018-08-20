import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import {TodoAddComponent} from './components/todo-add/todo-add.component';

const routes: Routes = [
  {path: '', component: TodosListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add', component: TodoAddComponent},
  {path: 'todos/:id', component: TodoEditComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
