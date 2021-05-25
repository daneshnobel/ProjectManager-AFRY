import { Injectable } from '@angular/core';

import { FieldBase } from '../shared/field-base';
import { FieldCheckBox } from '../shared/field-check-box';
import { FieldInputNumber } from '../shared/field-input-number';
import { FieldTextBox } from '../shared/field-text-box';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }
  //project : 
  getFields():FieldBase<string>[]{
   const fields:FieldBase<string>[] = [

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
   ];
   return fields;
  }
}
