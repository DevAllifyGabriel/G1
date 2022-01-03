import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNewsSubtitleComponent } from './details-news-subtitle.component';

describe('DetailsNewsSubtitleComponent', () => {
  let component: DetailsNewsSubtitleComponent;
  let fixture: ComponentFixture<DetailsNewsSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNewsSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNewsSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
