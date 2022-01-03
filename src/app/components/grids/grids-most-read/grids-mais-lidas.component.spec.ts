import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsMaisLidasComponent } from './grids-mais-lidas.component';

describe('GridsMaisLidasComponent', () => {
  let component: GridsMaisLidasComponent;
  let fixture: ComponentFixture<GridsMaisLidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsMaisLidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsMaisLidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
