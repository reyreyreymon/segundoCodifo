import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosVComponent } from './empleados-v.component';

describe('EmpleadosVComponent', () => {
  let component: EmpleadosVComponent;
  let fixture: ComponentFixture<EmpleadosVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
