import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVComponent } from './productos-v.component';

describe('ProductosVComponent', () => {
  let component: ProductosVComponent;
  let fixture: ComponentFixture<ProductosVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
