import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweryJewelsComponent } from './jewery-jewels.component';

describe('JeweryJewelsComponent', () => {
  let component: JeweryJewelsComponent;
  let fixture: ComponentFixture<JeweryJewelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweryJewelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeweryJewelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
