import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { Store } from '@ngrx/store';

/**** model ****/
import { User } from '@app/features/users/models/user.model';

/**** reducer ****/
import * as fromUsers from '@app/features/users/store/users.reducers';

/**** actions ****/
import * as usersActions from '@app/features/users/store/users.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private store: Store<fromUsers.FeatureState>
    ) {}

  ngOnInit() {
    // formulaire
    this.userForm = this._formbuilder.group({
      name : new FormControl(null,  [
        Validators.required
      ])
    })   
  }

   // convenience getter for easy access to form fields
   get f() { 
    return this.userForm.controls; 
  }

  addUser() : void {
    const newUser = new User(this.userForm.value.name, Math.round(Math.random() * 2000));
    this.store.dispatch(new usersActions.AddUserActions(newUser));
    // reset form
    this.userForm.reset();
  }




}
