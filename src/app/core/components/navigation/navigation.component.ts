import { Component, EventEmitter, Input , Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() isAuthenticated : boolean;
  @Input() profile;
  @Output() handleLogin : EventEmitter<any> = new EventEmitter;
  @Output() handleLogout : EventEmitter<any> = new EventEmitter;


  login() {
    this.handleLogin.emit();
  }

  logout() {
    this.handleLogout.emit();
  }

}
