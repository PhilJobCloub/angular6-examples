import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';

@Component({
  selector: 'app-users-home',
  template: `
    <h1>USERS HOME PAGE</h1>
    <app-users-navigation></app-users-navigation>
    <section role="main" class="flex-container">
      <section role="list" class="flex-block">
        <app-users-listing></app-users-listing>
      </section>
      <section role="details" class="flex-block">
        <router-outlet></router-outlet>
      </section>
  `,
  styles : [
      `
      `
    ]
})

export class UsersHomePage  {

  // get param if in queryParams
  constructor() {}
}
