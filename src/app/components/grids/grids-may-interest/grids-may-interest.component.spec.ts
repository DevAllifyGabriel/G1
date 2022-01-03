import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsMayInterestComponent } from './grids-may-interest.component';

describe('GridsMayInterestComponent', () => {
  let component: GridsMayInterestComponent;
  let fixture: ComponentFixture<GridsMayInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsMayInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsMayInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
