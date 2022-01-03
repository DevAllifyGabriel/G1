import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToMakeComponent } from './how-to-make.component';

describe('HowToMakeComponent', () => {
  let component: HowToMakeComponent;
  let fixture: ComponentFixture<HowToMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToMakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
