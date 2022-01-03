import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-grids-mais-lidas',
  templateUrl: './grids-mais-lidas.component.html',
  styleUrls: ['./grids-mais-lidas.component.scss'],
})
export class GridsMaisLidasComponent implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() title?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}

/* @Input() title?: string;
  public topFive: any;
  constructor(private fiveService: NewsService) {}

  ngOnInit(): void {
    this.fiveService.apiTop.subscribe((res) => {
      this.topFive = res;
      console.log(res);
    });
  }
 */
