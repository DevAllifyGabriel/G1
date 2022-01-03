import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-grids-may-interest',
  templateUrl: './grids-may-interest.component.html',
  styleUrls: ['./grids-may-interest.component.scss'],
})
export class GridsMayInterestComponent implements OnInit {
  @Input() apiAll?: any[] = [];

  @Input() title?: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('app-grids-may-interest');

    Utils.shuffleArray(this.apiAll);
  }
}
