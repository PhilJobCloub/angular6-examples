import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEllipsisComponent } from './test-ellipsis.component';

describe('TestEllipsisComponent', () => {
  let component: TestEllipsisComponent;
  let fixture: ComponentFixture<TestEllipsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEllipsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
