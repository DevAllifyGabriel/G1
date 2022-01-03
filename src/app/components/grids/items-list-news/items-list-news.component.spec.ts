import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListNewsComponent } from './items-list-news.component';

describe('ItemsListNewsComponent', () => {
  let component: ItemsListNewsComponent;
  let fixture: ComponentFixture<ItemsListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
