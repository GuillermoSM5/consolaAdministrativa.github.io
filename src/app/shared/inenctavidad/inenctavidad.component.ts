import { Component, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inenctavidad',
  templateUrl: './inenctavidad.component.html',
  styleUrls: ['./inenctavidad.component.scss'],
})
export class InenctavidadComponent implements OnInit {
  userActivity: any;
  userInactive: Subject<any> = new Subject();

  constructor() {
    this.setTimeout();
    this.userInactive.subscribe(() =>
      console.log('user has been inactive for 3s')
    );
  }

  setTimeout() {
    this.userActivity = setTimeout(
      () => this.userInactive.next(undefined),
      3000
    );
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  @HostListener('window:keydown.enter', ['$event.target'])
  onClick() {
    // console.log('button' );
  }

  ngOnInit(): void {}
}
