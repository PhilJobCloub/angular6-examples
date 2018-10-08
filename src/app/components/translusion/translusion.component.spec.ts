import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslusionComponent } from './translusion.component';

describe('TranslusionComponent', () => {
  let component: TranslusionComponent;
  let fixture: ComponentFixture<TranslusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
