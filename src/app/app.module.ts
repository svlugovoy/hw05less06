import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AboutComponent } from './components/about/about.component';
import { RoutingModule } from './routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { DataExchangeService } from './services/data-exchange.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftmenuComponent,
    FooterComponent,
    TodosListComponent,
    AboutComponent,
    NotFoundComponent,
    TodoEditComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [TodoService, DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
