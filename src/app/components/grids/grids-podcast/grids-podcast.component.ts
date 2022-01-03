import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-grids-podcast',
  templateUrl: './grids-podcast.component.html',
  styleUrls: ['./grids-podcast.component.scss'],
})
export class GridsPodcastComponent implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() title?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}

/*  public podCast: any;
  constructor(private apiComo: NewsService) {}

  ngOnInit(): void {
    this.apiComo.apiTop.subscribe((res) => {
      this.podCast = res;
      console.log(res);
    });
  } */
