import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  todosCount: number;

  constructor(
    private dataExchangeService: DataExchangeService
  ) { }

  ngOnInit() {
    this.dataExchangeService.currentTodosCount.subscribe( count => {
      this.todosCount = count;
    });
  }

}
