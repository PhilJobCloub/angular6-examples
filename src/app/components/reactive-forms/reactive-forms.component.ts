import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public profileForm: FormGroup;
  public submitted : boolean = false;


  public forbiddenUserNames : string[] = ['didier', 'phil'];

  constructor(private fb: FormBuilder) {}

  
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstname : new FormControl('', [
        Validators.required, 
        this.forbiddenNames.bind(this)
       ]),
      lastname : new FormControl(null),
      email : new FormControl(null, 
        [ Validators.required ],
        this.forbiddenEmail.bind(this)
      ),
      password : new FormControl(null, [
          Validators.required,
          this.validatePassword.bind(this)
        ]
      ),
      age : new FormControl(null, [
          Validators.required,
          Validators.pattern("[0-9]*$"),
          Validators.min(18)
        ]
      ),
      address : this.fb.group({
        street: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        zip: new FormControl(null)
      }),
      check :new FormControl(false),
    })   

    // value Changes
    this.profileForm.valueChanges.subscribe(
      (value) => {
        console.log(`Value: ${JSON.stringify(value)}`)
      }
    )
    
    //Status Changes
    this.profileForm.statusChanges.subscribe(
      (status) => console.log(`Status: ${status}`)
    )
  }


  // convenience getter for easy access to form fields
  get f() { 
    return this.profileForm.controls; 
  }

  

  preFillProfile() {
    this.profileForm.patchValue({
      firstname: 'Nancy',
      lastname : 'Janis',
      email : 'Janis@nancy.ch',
      age : 15,
      address: {
        street: '123 Drew Street',
        city: 'New York',
        state: ' UK',
        zip: 'EC1R3EA'
      }
    });
  }

  forbiddenNames (control : FormControl) : { [s : string] : Boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) != -1) {
      return { 'nameForbidden' : true }
    } else {
      return null;
    }
  }

  validatePassword (control : FormControl) : { [s : string] : Boolean } {
    if (!!control.value)
    {
      let valid = false;
      // if has a number
      !!control.value.match(/\d+/g) 
      // if has a capital letter
      &&  !!control.value.match(/[A-Z]/g) 
      // length > 8
      && control.value.trim().length > 8 
      ? valid = true 
      : valid = false;
      
      if (valid) {
        return null;
      } else {
        return { 'passwordInvalid' : true}
      }
    }
      
    
    return null
  }

  forbiddenEmail(control : FormControl) : Promise<any> {
    // creaste the promise
    const promise = new Promise<any>(
      (resolve, reject) => {
      // simulation server
        setTimeout(
          () => {
            if (control.value === 'test@test.com') {
              resolve({ 'emailIsForbidden' : true })
            } else {
              resolve(null)
            }
        }, 
      2000)
    })
    // return the value
    return promise;
  }

  /*
  forbiddenEmail(control : FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        debugger
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden' : true});
        } else {
          resolve(null)
        }
      }, 1500)
    });

    return promise;

}*/

  onSubmit() {
    this.submitted= true;
   console.log(this.profileForm.value)
  }

}
