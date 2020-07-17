import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinslistComponent } from './machinslist.component';

describe('MachinslistComponent', () => {
  let component: MachinslistComponent;
  let fixture: ComponentFixture<MachinslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
