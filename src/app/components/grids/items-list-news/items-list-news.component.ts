import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-items-list-news',
  templateUrl: './items-list-news.component.html',
  styleUrls: ['./items-list-news.component.scss'],
})
export class ItemsListNewsComponent implements OnInit {
  @Input() news?: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
}
