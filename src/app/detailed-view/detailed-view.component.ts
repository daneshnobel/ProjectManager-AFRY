import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectDetailsService } from '../services/project-details.service';
import { DynamicFormComponent } from '../shared/dynamic-form/dynamic-form.component';
import { FieldBase } from '../shared/field-base';
import { FieldCheckBox } from '../shared/field-check-box';
import { FieldInputNumber } from '../shared/field-input-number';
import { FieldTextBox } from '../shared/field-text-box';
import { Project, tasks } from '../shared/project';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  private dynamicForm!:DynamicFormComponent;

  project!:Project;
  fields:FieldBase<string>[];
  constructor(service:ProjectDetailsService){
    this.fields = service.getFields();
  }

  ngOnInit(): void {
    const projects:Project[] = this.getProjects()
    this.project = projects[0];
  }
  onSelectedSamplingTime($event:any){
    debugger;
    console.log($event);
    const task:tasks[] = this.project.tasks.filter(task => task.time === $event.time);
    this.fields = task[0].fields;
    this.dynamicForm.ngOnUpdate(this.fields);
    console.log(this.fields);
  }

  getProjects():Project[]{
    const projects:Project[] = [
      {ID:1,
        title:"New Observation",
      tasks: [{
        time:"2021-04-21T11:00:05.5051255+05:30",
        fields :[
          new FieldTextBox({
            ID:"1",
            value:"Road Construction 1",
            label:"Project Name",
            required:true,
            type:"textbox"
          }),
          new FieldInputNumber({
            ID:"2",
            value:"40",
            label:"Construction Count",
            type:"number"
      
          }),
          new FieldCheckBox({
            ID:"3",
            value:"false",
            label:"Is Construction Completed",
            type:"checkbox"
          }),
          new FieldInputNumber({
            ID:"4",
            value:"5.6",
            label:"Length of the road",
            symbol:"KM",
            step:".1",
            type:"number"
      
          })
         ]
      },
      {
        time:"2021-04-22T11:00:05.5081232+05:30",
        fields :[
          new FieldTextBox({
            ID:"1",
            value:"Road Construction 2",
            label:"Project Name",
            required:true,
            type:"textbox"
          }),
          new FieldInputNumber({
            ID:"2",
            value:"30",
            label:"Construction Count",
            type:"number"
      
          }),
          new FieldCheckBox({
            ID:"3",
            value:"false",
            label:"Is Construction Completed",
            type:"checkbox"
          }),
          new FieldInputNumber({
            ID:"4",
            value:"2.6",
            label:"Length of the road",
            symbol:"KM",
            step:".1",
            type:"number"
      
          })
         ]
      }]
      }
    ]
    return projects;
  }

}
