import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-grids-look-here',
  templateUrl: './grids-look-here.component.html',
  styleUrls: ['./grids-look-here.component.scss'],
})
export class GridsLookHereComponent implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() titleHere?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}

/*  @Input() titleHere?: string;
  public topFive: any;
  constructor(private fiveService: NewsService) {}

  ngOnInit(): void {
    this.fiveService.apiTop.subscribe((res) => {
      this.topFive = res;
      console.log(res);
    });
  } */
