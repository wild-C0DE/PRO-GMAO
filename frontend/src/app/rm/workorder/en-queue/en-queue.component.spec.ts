import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnQueueComponent } from './en-queue.component';

describe('EnQueueComponent', () => {
  let component: EnQueueComponent;
  let fixture: ComponentFixture<EnQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
