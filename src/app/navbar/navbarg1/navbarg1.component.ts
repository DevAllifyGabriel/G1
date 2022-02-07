import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbarg1',
  templateUrl: './navbarg1.component.html',
  styleUrls: ['./navbarg1.component.scss']
})
export class Navbarg1Component implements OnInit {
  title = 'g1Copy';
  @Output() emmitSearch: EventEmitter<any>  = new EventEmitter();
  @Output() onOpen: any = new EventEmitter();
  @Input() logo: string;
  @Input() menu: string;
  
  constructor() {}

  ngOnInit(): void {}

  search(value: string) {
    this.emmitSearch.emit(value);
  }

  openMenu() {
    this.onOpen.emit(true);
  }

}
