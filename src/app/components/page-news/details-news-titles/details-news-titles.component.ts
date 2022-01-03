import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-news-titles',
  templateUrl: './details-news-titles.component.html',
  styleUrls: ['./details-news-titles.component.scss'],
})
export class DetailsNewsTitlesComponent implements OnInit {
  @Input() apidetails?: any[] = [];

  @Input() detailsNewstitle?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
