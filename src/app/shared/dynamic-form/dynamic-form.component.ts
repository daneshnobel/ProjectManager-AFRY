import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBase } from '../field-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields : FieldBase<string>[] = [];
  form!:FormGroup;
  payLoad = '';
  constructor() { }

  ngOnInit(): void {
   this.form = this.TransformFieldsToFormGroup(this.fields as FieldBase<string>[]);
    
  }

  OnSubmit(){

  }

  ngOnUpdate(fields:FieldBase<string>[]):void{
    this.form = this.TransformFieldsToFormGroup(fields as FieldBase<string>[]);
  }

  TransformFieldsToFormGroup(fields:FieldBase<String>[]):FormGroup{
    const group:any = {};
    fields.forEach((field) =>{
      group[field.ID] = field.required? 
      new FormControl(field.value||'',Validators.required):
      new FormControl(field.value||'')
    });
    return new FormGroup(group);
  }
}
