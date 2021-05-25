import { Component, Input, OnInit } from '@angular/core';
import { FieldBase } from '../shared/field-base';
import { tasks } from '../shared/project';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() tasks!:tasks[];
  @Input() projectId:number = 0;
   _timeFormatter!:string;
   @Output() samplingTimeSelected = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit(): void {
   
  }
  formatTime(dateString:string):string{
    return new Date(dateString).toLocaleString('en-GB',{hour12:true}).toUpperCase();
  }

  onItemClicked(value:any){
    debugger;
    this.samplingTimeSelected.emit(value)
  }

}
