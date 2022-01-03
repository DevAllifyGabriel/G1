import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-item-news-only',
  templateUrl: './item-news-only.component.html',
  styleUrls: ['./item-news-only.component.scss'],
})
export class ItemNewsOnlyComponent implements OnInit {
  public recomends: any;
  public infoNews: any;
  apiAll: any[] = [];
  apidetails: any[] = [];
  @Output() onOpen: any = new EventEmitter();
  isSidbarOpen = false;
  news: any[] = [];

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private fiveService: NewsService
  ) {
    this.router.params.subscribe((params) => this.newsInfo(params['id']));
  }

  ngOnInit(): void {
    let resp = this.http.get(
      ' https://617b5105d842cf001711be2e.mockapi.io/features'
    );
    resp.subscribe((_news) => (this.recomends = _news));

    this.fiveService.apiDetails.subscribe((res) => {
      this.apidetails = res;
      console.log(this.apidetails);
    });
  }

  newsInfo(id: string) {
    let resp = this.http.get(
      ` https://617b5105d842cf001711be2e.mockapi.io/features/${id}`
    );
    resp.subscribe((_info) => (this.infoNews = _info));
  }

  openMenu() {
    this.onOpen.emit(true);
  }
  getSearch(value: string) {
    const filter = this.news.filter((res: any) => {
      return !res.title.indexOf(value.toLowerCase());
    });
    this.news = filter;
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
