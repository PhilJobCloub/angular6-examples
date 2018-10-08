import { Component, Directive } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NG_VALIDATORS, AbstractControl,
         NgForm, FormControl } from '@angular/forms';
import { EmailValidator } from './email.validator';

describe('Validator: Email', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [EmailValidator]
      });
    });

    it('should return the validateEmail : { valid : false} if unvalid email', () => {
        expect(EmailValidator.validate(new FormControl('testfakeId'))).toEqual({
            'validateEmail': { 'valid': false }
          });
      });

    it('should return the validateEmail : { valid : false} if unvalid email', () => {
    expect(EmailValidator.validate(new FormControl('testfakeId@gmail'))).toEqual({
        'validateEmail': { 'valid': false }
        });
    });

    it('should return the validateEmail : null if valid email', () => {
        expect(EmailValidator.validate(new FormControl('regular@email.com'))).toEqual(null);
    });

   

});
