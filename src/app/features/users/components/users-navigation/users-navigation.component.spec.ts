import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNavigationComponent } from './users-navigation.component';

describe('UsersListComponent', () => {
  let component: UsersNavigationComponent;
  let fixture: ComponentFixture<UsersNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
