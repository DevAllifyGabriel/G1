import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  @Input() arrayNews?: any[] = [];

  @Input() title?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Utils.shuffleArray(this.arrayNews);
  }
}
