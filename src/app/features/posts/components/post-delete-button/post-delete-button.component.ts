import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

/**** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

/**** actions ****/
import * as postsActions from '@app/features/posts/store/actions/posts.actions';

@Component({
  selector: 'app-post-delete-button',
  templateUrl: './post-delete-button.component.html',
  styleUrls: ['./post-delete-button.component.scss']
})
export class PostDeleteButtonComponent implements OnInit {

  @Input() postId : number;

  @Output() handleClickEvent: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<fromPosts.FeatureState>) { }

  ngOnInit() {
  }

  onClick(postId : number) {
    this.handleClickEvent.emit(postId);
  }
}
