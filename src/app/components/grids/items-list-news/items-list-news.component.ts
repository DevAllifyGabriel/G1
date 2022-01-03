import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-items-list-news',
  templateUrl: './items-list-news.component.html',
  styleUrls: ['./items-list-news.component.scss'],
})
export class ItemsListNewsComponent implements OnInit {
  filterNews: any;
  @Input() news?: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.filterNews);
  }
}
