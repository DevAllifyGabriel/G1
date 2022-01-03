import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-grids-blog-g1',
  templateUrl: './grids-blog-g1.component.html',
  styleUrls: ['./grids-blog-g1.component.scss'],
})
export class GridsBlogG1Component implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() titleHere?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}
