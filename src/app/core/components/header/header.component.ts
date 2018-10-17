import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isAuthenticated : boolean;
  @Output() handleLogin : EventEmitter<any> = new EventEmitter;
  @Output() handleLogout : EventEmitter<any> = new EventEmitter;


  login() {
    this.handleLogin.emit();
  }

  logout() {
    this.handleLogout.emit();
  }
}
