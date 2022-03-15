import { Component, Input, OnInit } from '@angular/core';

export interface Link {
  text: string;
  link: string;
}
@Component({
  selector: 'app-side-navbar-item',
  templateUrl: './side-navbar-item.component.html',
  styleUrls: ['./side-navbar-item.component.scss'],
})
export class SideNavbarItemComponent implements OnInit {
  @Input() text: string = '';
  @Input() notifications: number = 0;
  @Input() links: Link[] = [];
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
