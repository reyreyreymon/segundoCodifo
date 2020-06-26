import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisVComponent } from './analisis-v.component';

describe('AnalisisVComponent', () => {
  let component: AnalisisVComponent;
  let fixture: ComponentFixture<AnalisisVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
