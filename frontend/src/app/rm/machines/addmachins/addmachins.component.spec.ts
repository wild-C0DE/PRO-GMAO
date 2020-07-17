import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmachinsComponent } from './addmachins.component';

describe('AddmachinsComponent', () => {
  let component: AddmachinsComponent;
  let fixture: ComponentFixture<AddmachinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmachinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmachinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
