import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratikshaComponent } from './pratiksha.component';

describe('PratikshaComponent', () => {
  let component: PratikshaComponent;
  let fixture: ComponentFixture<PratikshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratikshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
