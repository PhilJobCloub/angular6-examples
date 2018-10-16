import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeleteButtonComponent } from './post-delete-button.component';

describe('PostDeleteButtonComponent', () => {
  let component: PostDeleteButtonComponent;
  let fixture: ComponentFixture<PostDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
