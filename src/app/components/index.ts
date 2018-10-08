import { FoobarComponent } from './foobar/foobar.component';
import { NewoneComponent } from './newone/newone.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'; 
import { TestEllipsisComponent } from './test-ellipsis/test-ellipsis.component'; 



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
    ...bottomComponent
  ];

export { FoobarComponent } from './foobar/foobar.component';
export { NewoneComponent } from './newone/newone.component';
export { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'; 
export { TestEllipsisComponent } from './test-ellipsis/test-ellipsis.component'; 
