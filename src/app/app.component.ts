import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetailsService } from './services/project-details.service';
import { FieldBase } from './shared/field-base';
import { FieldCheckBox } from './shared/field-check-box';
import { FieldInputNumber } from './shared/field-input-number';
import { FieldTextBox } from './shared/field-text-box';
import { Project, tasks } from './shared/project';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ProjectManager';
  currentProjectId:number = 1; //this is intentionally hardcoded
  tasks?:tasks[]
  project?: Project;
  constructor(){
    
  }

  ngOnInit(){
    debugger;
    const projects:Project[] = this.getProjects()
    this.project = projects.filter(project => project.ID === this.currentProjectId).pop();
    this.tasks = this.project?.tasks;
    
  }

  getProjects():Project[]{
    const projects:Project[] = [
      {ID:1,
        title:"New Observation",
      tasks: [
        {
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
 
  getHeadersOfSummary(project?:Project):any{
    const labelForSamplingTime = "Sampling Time";

    const otherHeaders:string[]  = project?.tasks[0]?.fields?.sort((a,b)=> {
      return parseInt(a.ID) - parseInt(b.ID)})?.map(field => field.label)!;
    
      return [labelForSamplingTime,...otherHeaders];
  }

  transformFieldsToNestedDataset(tasks:tasks[] = []):any{
   return _.flatMap(tasks,function(task){
      let fields = task.fields.map(field => field.value );
      return [[new Date(task.time).toLocaleString('en-GB',{hour12:true}).toUpperCase()
      ,...fields]];
  })
  }

  constructDatasetForSummaryView():any{
    debugger;
    const transformedDataset:any = this.transformFieldsToNestedDataset(this.tasks);
    const headersOffields:any = this.getHeadersOfSummary(this.project);
    return {header:headersOffields,fieldset:[...transformedDataset]}
  }

}
