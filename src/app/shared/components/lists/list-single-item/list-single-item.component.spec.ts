import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleItemComponent } from './list-single-item.component';

describe('ListSingleItemComponent', () => {
  let component: ListSingleItemComponent;
  let fixture: ComponentFixture<ListSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
