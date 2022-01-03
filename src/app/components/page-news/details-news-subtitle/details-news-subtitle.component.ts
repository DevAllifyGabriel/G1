import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-news-subtitle',
  templateUrl: './details-news-subtitle.component.html',
  styleUrls: ['./details-news-subtitle.component.scss'],
})
export class DetailsNewsSubtitleComponent implements OnInit {
  @Input() apidetails?: any[] = [];

  @Input() detailsNewsSubtitle?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
