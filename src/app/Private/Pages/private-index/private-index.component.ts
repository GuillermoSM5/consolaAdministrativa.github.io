import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-private-index',
  templateUrl: './private-index.component.html',
  styleUrls: ['./private-index.component.css'],
})
export class PrivateIndexComponent implements OnInit {
  modeMenu: MatDrawerMode = 'side';
  windowHeight: string = `${window.innerHeight - 65}px`;

  constructor() {}

  @HostListener('window:resize')
  handleMenuMode(): void {
    this.windowHeight = `${window.innerHeight - 65}px`;
    // if (window.innerWidth >= 960) {
    //   this.modeMenu = "side";
    //   this.handleShowMenu();
    //   return;
    // }
    // this.modeMenu = "over";
    // this.handleShowMenu();
  }

  ngOnInit(): void {}
}
