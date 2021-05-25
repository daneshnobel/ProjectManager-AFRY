import { Component, Input, OnInit } from '@angular/core';
import { tasks } from '../shared/project';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent implements OnInit {
  @Input() dataGrid?:{header:[],fieldset:[]} 
  constructor() { }

  ngOnInit(): void {
  }

}
