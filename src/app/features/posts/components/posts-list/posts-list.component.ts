import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

/**** model ****/
import { Post } from '@app/features/posts/models/post.model';

/**** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

/**** actions ****/
import * as postsActions from '@app/features/posts/store/actions/posts.actions';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],

})
export class PostsListComponent {

  @Input() posts : Post[] = [];

  constructor(
    private router : Router,
    private store : Store<fromPosts.FeatureState>
    ) {}

  removePost({id}) {
    this.store.dispatch(new postsActions.DeletePostActions(id));
  }

  navigateToPostDetails({id}) {
    this.router.navigate(['posts', id]);
  }

}
