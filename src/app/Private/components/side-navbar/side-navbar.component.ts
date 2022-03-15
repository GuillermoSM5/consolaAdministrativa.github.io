import { Component, OnInit } from '@angular/core';
import { Link } from '../side-navbar-item/side-navbar-item.component';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  liksClientes: Link[] = [
    { text: 'Buscar Cliente', link: 'searchClient' },
    { text: 'Agregar Cliente', link: 'addClient' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
