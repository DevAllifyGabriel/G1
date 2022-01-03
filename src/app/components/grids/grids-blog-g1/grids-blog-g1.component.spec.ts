import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsBlogG1Component } from './grids-blog-g1.component';

describe('GridsBlogG1Component', () => {
  let component: GridsBlogG1Component;
  let fixture: ComponentFixture<GridsBlogG1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsBlogG1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsBlogG1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
