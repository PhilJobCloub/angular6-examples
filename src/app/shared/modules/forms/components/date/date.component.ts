import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "@app/shared/modules/forms/interfaces/field.interface";


@Component({
  selector: 'app-date',
  template: `
  <div [formGroup]="group">
    <input 
      type="date"
      [formControlName]="field.name" 
      [placeholder]="field.label">

    <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
      <span #errors 
        *ngIf="group.get(field.name).hasError(validation.name)">
          {{validation.message}}
      </span>
    </ng-container>
  </div>
  `,
  styles: []
})
export class DateComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
