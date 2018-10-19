import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/**** model ****/
import { Post } from '@app/features/posts/models/post.model';

/**** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

/**** selectors ****/
import * as fromPostsSelectors from '@app/features/posts/store/selectors/posts.selectors';

/**** actions ****/
import * as postsActions from '@app/features/posts/store/actions/posts.actions';

@Component({
  selector: 'app-post-details',
  template: `
    <h1>POST DETAILS</h1>
  {{ (post$ | async) | json }}
  <br/>
  <app-post-delete-button [postId]="(post$ | async).id" (handleClickEvent)="deletePost($event)"></app-post-delete-button>
  `,
  styles : [
      ``
    ]
})

export class PostDetailsPage implements OnInit {

  public post$ : Observable<Post>;

  constructor(
      private router : Router,
      private store : Store<fromPosts.FeatureState>
    ) {}

  ngOnInit() {
    this.post$ = this.store.select(fromPostsSelectors.getPostById);
  }

  deletePost(postId : number) {
    this.store.dispatch(new postsActions.DeletePostActions(postId));
    this.router.navigate(['posts']);
  }

}
