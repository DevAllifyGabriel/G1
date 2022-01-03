import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsFakeComponent } from './grids-fake.component';

describe('GridsFakeComponent', () => {
  let component: GridsFakeComponent;
  let fixture: ComponentFixture<GridsFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsFakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
