import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
})
export class MainNewsComponent implements OnInit {
  public getAllNews: any;
  apiAll: any[] = [];
  apidetails: any[] = [];
  filterNews: any;
  news: any[] = [];
  isSidbarOpen = false;

  constructor(private fiveService: NewsService) {}

  ngOnInit(): void {
    this.fiveService.apiAll.subscribe((res) => {
      this.apiAll = res;
    });

    this.fiveService.apiNews.subscribe((res) => {
      this.news = res;
    });
  }

  getSearch(value: string){
    const filter = this.apiAll.filter((res: any) =>{
      return !res.title.indexOf(value.toLowerCase());
    });
    this.apiAll = filter;
  }

  onSidbarOpen(opened: boolean) {
    this.isSidbarOpen = opened;
    let _htmlElement = document.querySelector('html');
    if (this.isSidbarOpen) {
      _htmlElement?.classList.add('scroll-hidden');
    } else {
      _htmlElement?.classList.remove('scroll-hidden');
    }
  }

  

}
