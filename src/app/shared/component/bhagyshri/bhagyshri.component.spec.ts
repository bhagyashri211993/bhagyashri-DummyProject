import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagyshriComponent } from './bhagyshri.component';

describe('BhagyshriComponent', () => {
  let component: BhagyshriComponent;
  let fixture: ComponentFixture<BhagyshriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhagyshriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagyshriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
