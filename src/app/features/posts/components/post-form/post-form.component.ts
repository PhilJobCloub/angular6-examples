import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { Store } from '@ngrx/store';

/**** model ****/
import { Post } from '@app/features/posts/models/post.model';

/**** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

/**** actions ****/
import * as postsActions from '@app/features/posts/store/actions/posts.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  public postForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private store: Store<fromPosts.FeatureState>
    ) {}

  ngOnInit() {
    // formulaire
    this.postForm = this._formbuilder.group({
      title : new FormControl(null,  [
        Validators.required
      ]),
      body : new FormControl(null,  [
        Validators.required
      ])
    })   
  }

   // convenience getter for easy access to form fields
   get f() { 
    return this.postForm.controls; 
  }

  addPost() : void {
    const newPost = new Post(this.postForm.value.title, Math.round(Math.random() * 2000), this.postForm.value.body);
    this.store.dispatch(new postsActions.AddPostActions(newPost));
    // reset form
    this.postForm.reset();
  }




}
