import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*****Components****/
import * as fromComponents from './components';

/*****Pages****/
import * as fromPages from './pages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromPages.pages
  ],
  exports : [
    ...fromComponents.components,
    ...fromPages.pages
  ],
  entryComponents:[
    fromComponents.ModalComponent
  ]
})
export class CoreModule { }
