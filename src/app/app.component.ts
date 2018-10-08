import { Component, ViewChild, OnInit } from '@angular/core';

import {
  debounceTime,
  map,
  distinctUntilChanged,
  startWith,
  tap
 }
 from 'rxjs/operators';
 
import { Observable, fromEvent } from 'rxjs';
/* services */
import { AppSandboxService } from './services/app-sandbox.service';
import { SubjectService } from './services/subject.service';
import { AppModalService } from './services/app-modal.service';

/* config  */
import * as config from '@app/config/registration-form-template';

/* dynamic form */
import { DynamicFormComponent } from "@app/shared/modules/forms/components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public today = new Date();
  public title : string = 'hello-world';
  public name : string = 'test';
  public valItem : string = 'my new value';
  public nameCreated : boolean = false;
  public variable_text : string = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    `;

  public users : any[] = [
    { id : 1 , name : 'Jean'},
    { id : 2, name : 'Michel'},
    { id : 3 , name : 'Bernard'},
    { id : 4 , name : 'Corentin'}
  ]
  private age : number = 90;
  public resize$ : Observable<any>;
  /**/

  regConfig = config.registrationFormTemplate;

  /**/

  constructor(
    private _service : SubjectService,
    private _appSandBox : AppSandboxService,
    private _appModalService : AppModalService) {
    this.age = 50;

    //Create observable from the window event
    this.resize$ = fromEvent(window, 'resize')
    .pipe(
      debounceTime(200),
      map(() => window.innerWidth), //Don't use mapTo! 
      distinctUntilChanged(),
      startWith(window.innerWidth),
      tap(width => this._appSandBox.setWindowWidth(width)), 
    );
    this.resize$.subscribe(); 
  }

  ngOnInit() {
    this._service.userActivated.subscribe(
      (val) => {
        console.log(val)
      }
    )
  }

  onSubmit(form) {
      console.log(form);
  }

 
  onActivate() {
    let num = Math.round((Math.random() * 6) + 1);
    this._service.userActivated.next(num)
  }


  /** Example : event from extended Class **/
  alertJobId({id}) {
   alert(id);
  }

  alertJobTitle({title}) {
    alert(title);
   }

  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value
    //this.nameCreated = (this.name.trim().length > 0);
    
  }

  removeModal() {
    this._appModalService.destroy();
  }

}
