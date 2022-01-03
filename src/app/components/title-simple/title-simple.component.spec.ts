import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSimpleComponent } from './title-simple.component';

describe('TitleSimpleComponent', () => {
  let component: TitleSimpleComponent;
  let fixture: ComponentFixture<TitleSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
