import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@app/shared/modules/forms/interfaces/field.interface';


@Component({
  selector: 'app-checkbox',
  template: `
  <div [formGroup]="group" >
    <label>
      {{field.label}}
      <input
        type="checkbox"
        [formControlName]="field.name"/>
    </label>
  </div>
  `,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field : FieldConfig;
  group : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
