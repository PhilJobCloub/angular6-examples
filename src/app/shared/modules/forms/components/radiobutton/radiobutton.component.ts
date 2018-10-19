import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@app/shared/modules/forms/interfaces/field.interface';


@Component({
  selector: 'app-radiobutton',
  template: `

  <div [formGroup]="group" >
    <label>{{field.label}}:</label>
      {{field.label}}
      <input type="radio"
        [formControlName]="field.name"
        *ngFor="let item of field.options"
        [value]="item"/>
  </div>
  `,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field : FieldConfig;
  group : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}


