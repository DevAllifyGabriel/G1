import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.scss'],
})
export class DetailsNewsComponent implements OnInit {
  @Input() apidetails?: any[] = [];

  @Input() infoTitle?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
