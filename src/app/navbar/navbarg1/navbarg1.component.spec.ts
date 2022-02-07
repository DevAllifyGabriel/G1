import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarg1Component } from './navbarg1.component';

describe('Navbarg1Component', () => {
  let component: Navbarg1Component;
  let fixture: ComponentFixture<Navbarg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navbarg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbarg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
