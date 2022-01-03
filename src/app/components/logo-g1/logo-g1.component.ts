import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-g1',
  templateUrl: './logo-g1.component.html',
  styleUrls: ['./logo-g1.component.scss'],
})
export class LogoG1Component implements OnInit {
  @Input() logo?: string;

  constructor() {}

  ngOnInit(): void {}
}
