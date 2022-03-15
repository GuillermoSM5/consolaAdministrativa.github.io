import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../core/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  cerrarSesion() {
    this.storageService.closeSession();
  }

  getLogin(): boolean {
    const session = this.storageService.getSession();
    return !!session;
  }
  ngOnInit(): void {}
}
