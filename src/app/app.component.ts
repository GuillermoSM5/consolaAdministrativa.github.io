import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { LoaderServiceService } from './core/loader-service/loader-service.service';
import { StorageService } from './core/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewChecked {
  public load = false;
  title = 'consolaFrontEnd';

  userActivity: any;
  userInactive: Subject<any> = new Subject();
  private _subs: Subscription | undefined;

  constructor(
    private storageService: StorageService,
    private _loaderService: LoaderServiceService,
    private cd: ChangeDetectorRef
  ) {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      console.log('user has been inactive for 2m');
      this.storageService.closeSession();
    });
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
    this._subs = this._loaderService.isLoading.subscribe((res) => {
      this.load = res;
    });
  }

  ngOnDestroy() {
    if (!this._subs) return;
    this._subs.unsubscribe();
  }

  setTimeout() {
    this.userActivity = setTimeout(
      () => this.userInactive.next(undefined),
      180000
    );
  }

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent) {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
