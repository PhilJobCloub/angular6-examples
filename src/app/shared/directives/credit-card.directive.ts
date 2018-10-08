import { 
  Directive,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  @HostBinding('style.background') 
  background : string;


  @HostListener('input', ['$event']) 
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    //console.log(input.value)

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    this.background = '';
    console.log(/[^\d]+/.test(trimmed));
    if (/[^\d]+/.test(trimmed)) {
      this.background = '#cc3300';
    }

  }

  constructor() { 
      //this.background = '#cc3300';
  }

}
