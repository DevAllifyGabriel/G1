import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-simple',
  templateUrl: './title-simple.component.html',
  styleUrls: ['./title-simple.component.scss'],
})
export class TitleSimpleComponent implements OnInit {
  @Input() titleSimple?: string;
  @Input() titleSimplesMain?: string;
  @Input() titleSimpleMain?: string;

  constructor() {}

  ngOnInit(): void {}
}
