import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/**** model ****/
import { Post } from '@app/features/posts/models/post.model';

/**** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

/**** selectors ****/
import * as fromPostsSelectors from '@app/features/posts/store/selectors/posts.selectors';

/**** actions ****/
import * as postsActions from '@app/features/posts/store/actions/posts.actions';

@Component({
  selector: 'app-posts-listing',
  template: `
    <app-posts-list
      [posts]="postsList$ | async">
    </app-posts-list>
  `,
  styles : [
      ``
    ]
})

export class PostsListingPage implements OnInit {
  public postsList$ : Observable<Post[]>;

  constructor(
    private store : Store<fromPosts.FeatureState>
    ) {}

  ngOnInit() {
    this.store.dispatch(new postsActions.FetchPostsStartActions());
    this.postsList$ = this.store.select(fromPostsSelectors.getPostsList);
  }

}
