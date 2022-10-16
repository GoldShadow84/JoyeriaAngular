import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweryAboutComponent } from './jewery-about.component';

describe('JeweryAboutComponent', () => {
  let component: JeweryAboutComponent;
  let fixture: ComponentFixture<JeweryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweryAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeweryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
