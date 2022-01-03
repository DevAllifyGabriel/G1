import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNewsTitlesComponent } from './details-news-titles.component';

describe('DetailsNewsTitlesComponent', () => {
  let component: DetailsNewsTitlesComponent;
  let fixture: ComponentFixture<DetailsNewsTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNewsTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNewsTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
