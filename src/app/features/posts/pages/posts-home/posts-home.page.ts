import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-home',
  template: `
    <h1>POSTS HOME PAGE</h1>
    <section role="main" class="flex-container">
      <section role="list" class="flex-block">
        <app-posts-listing></app-posts-listing>
      </section>
      <section role="list" class="flex-block">
        <app-post-form></app-post-form>
      </section>
      <section role="details" class="flex-block">
        <router-outlet></router-outlet>
      </section>
    </section>
  `,
  styles : [
      `
      `
    ]
})

export class PostsHomePage  {

  // get param if in queryParams
  constructor() {}
}
