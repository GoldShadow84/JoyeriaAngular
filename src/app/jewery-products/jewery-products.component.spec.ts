import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweryProductsComponent } from './jewery-products.component';

describe('JeweryProductsComponent', () => {
  let component: JeweryProductsComponent;
  let fixture: ComponentFixture<JeweryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeweryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
