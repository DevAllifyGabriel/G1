import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClickComponent } from './menu-click.component';

describe('MenuClickComponent', () => {
  let component: MenuClickComponent;
  let fixture: ComponentFixture<MenuClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
