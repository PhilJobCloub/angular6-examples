import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable, Subscription} from 'rxjs';

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
  {{ postId }}
  <br/><button (click)="deletePost(postId)">Delete</button>
  `,
  styles : [
      ``
    ]
})

export class PostDetailsPage implements OnInit {
  public post$ : Observable<Post>;
  public post_subscription$ = new Subscription;
  public postId : number;

  constructor(private store: Store<fromPosts.FeatureState>) {}

  ngOnInit() {
    this.post$ = this.store.select(fromPostsSelectors.getPostById)
    this.post_subscription$ = this.post$.subscribe(({id}) => {
        this.postId = id
    });
    //console.log(this.post$.subscribe((post) => { return post.id }));
  }

  deletePost(id) {
        //this.store.dispatch(new postsActions.DeletePostActions());
      //console.log(this.post$);
      //this.store.select(fromPostsSelectors.getPostState);
      this.store.dispatch(new postsActions.DeletePostActions(id));
  }
}
