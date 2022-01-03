import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNewsOnlyComponent } from './item-news-only.component';

describe('ItemNewsOnlyComponent', () => {
  let component: ItemNewsOnlyComponent;
  let fixture: ComponentFixture<ItemNewsOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNewsOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNewsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
