import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****Components****/
import * as fromComponents from '@app/shared/modules/forms/components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromComponents.directives
  ],
  exports: [
    ...fromComponents.components,
    ...fromComponents.directives
    ],
  entryComponents: [
    ...fromComponents.components
    ]
})
export class DynamicFormsModule { }
