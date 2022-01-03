import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-how-to-make',
  templateUrl: './how-to-make.component.html',
  styleUrls: ['./how-to-make.component.scss'],
})
export class HowToMakeComponent implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() title?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}

/* public howMake: any;
  constructor(private fiveService: NewsService) {}

  ngOnInit(): void {
    this.fiveService.apiToUse.subscribe((res) => {
      this.howMake = res;
      console.log(res);
    });
  } */
