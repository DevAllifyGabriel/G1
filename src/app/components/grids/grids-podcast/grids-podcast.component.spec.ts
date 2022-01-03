import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsPodcastComponent } from './grids-podcast.component';

describe('GridsPodcastComponent', () => {
  let component: GridsPodcastComponent;
  let fixture: ComponentFixture<GridsPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsPodcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
