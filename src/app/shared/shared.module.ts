import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


/*******Components*******/
import * as fromComponents from './components';

/*******Directives*******/
import * as fromDirectives from './directives';

/*******pipes*******/
import * as fromPipes from './pipes';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
