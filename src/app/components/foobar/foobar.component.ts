import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { SubjectService } from '@app/services/subject.service';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.css']
})
export class FoobarComponent implements OnInit {

  constructor(private ss: SubjectService, private ar : ActivatedRoute) { }

  ngOnInit() {
     // subscribe to router event if in the router
     this.ar.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log(userId);
    });

    // get param if in queryParams
    let id = this.ar.snapshot.queryParams["id"];

    console.log(id)
  }

  resetCounter() {
    this.ss.resetUserActivated();
  }

  getUserActivated() {
    alert(this.ss.getUserActivated());
  }

  doOneThing() {
    alert("I'm doing one thing")
  }

  doAnotherThing() {
    alert("I'm doing another thing")
  }

}
