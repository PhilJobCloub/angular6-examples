import { FoobarComponent } from './foobar/foobar.component';
import { NewoneComponent } from './newone/newone.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'; 
import { TestEllipsisComponent } from './test-ellipsis/test-ellipsis.component'; 
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { TranslusionComponent } from './translusion/translusion.component';
import { ObservablesComponent } from './observables/observables.component';

const examplesComponent: any[] = [
  JobsComponent,
  JobsListComponent,
  JobsTableComponent,
  TranslusionComponent,
  ObservablesComponent
  
];

const topComponent: any[] = [
    FoobarComponent,
    ReactiveFormsComponent,
    TestEllipsisComponent
    
  ];

  const bottomComponent: any[] = [
    NewoneComponent

];

export const components: any[] = [
    ...topComponent,
    ...bottomComponent,
    ...examplesComponent
  ];

export { FoobarComponent } from './foobar/foobar.component';
export { NewoneComponent } from './newone/newone.component';
export { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'; 
export { TestEllipsisComponent } from './test-ellipsis/test-ellipsis.component'; 
export { JobsComponent } from './jobs/jobs.component';
export { JobsListComponent } from './jobs-list/jobs-list.component';
export { JobsTableComponent } from './jobs-table/jobs-table.component';
export { TranslusionComponent } from './translusion/translusion.component';
export { ObservablesComponent } from './observables/observables.component';


