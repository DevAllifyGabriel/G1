import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsLookHereComponent } from './grids-look-here.component';

describe('GridsLookHereComponent', () => {
  let component: GridsLookHereComponent;
  let fixture: ComponentFixture<GridsLookHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsLookHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsLookHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
