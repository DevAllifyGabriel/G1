import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-click',
  templateUrl: './menu-click.component.html',
  styleUrls: ['./menu-click.component.scss'],
})
export class MenuClickComponent implements OnInit {
  @Input() user?: string;
  @Input() open: boolean = false;
  listItem: Array<string> = [
    'editorias',
    'regiões',
    'telejornais',
    'globonews',
    'blogs e colunas',
    'podcast',
    'serviços',
    'videos',
    'newsletter',
    'especial publicitario',
  ];
  constructor() {}

  ngOnInit(): void {}
}
