import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "@app/shared/modules/forms/interfaces/field.interface";

@Component({
  selector: 'app-input',
  template: `
  <div 
    [formGroup]="group">
    <input 
      [formControlName]="field.name" 
      [placeholder]="field.label" 
      [type]="field.inputType">
    <ng-container 
      *ngFor="let validation of field.validations;" 
      ngProjectAs="errors">
    <span 
      #errors 
      *ngIf="group.get(field.name).hasError(validation.name)">
        {{validation.message}}
      </span>
    </ng-container>
  </div>
  `,
  styles: []
})

export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
  }
