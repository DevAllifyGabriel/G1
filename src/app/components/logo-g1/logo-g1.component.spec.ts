import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoG1Component } from './logo-g1.component';

describe('LogoG1Component', () => {
  let component: LogoG1Component;
  let fixture: ComponentFixture<LogoG1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoG1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoG1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
