import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweryHomeComponent } from './jewery-home.component';

describe('JeweryHomeComponent', () => {
  let component: JeweryHomeComponent;
  let fixture: ComponentFixture<JeweryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeweryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
