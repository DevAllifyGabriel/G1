import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  @Input() nameprofile?: string;

  constructor() {}

  ngOnInit(): void {}
}
