import { Component,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../field-base';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field!:FieldBase<String>
  @Input() form!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  get isValid() { return this.form.controls[this.field.ID].valid; }

}
