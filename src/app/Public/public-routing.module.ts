import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { PublicIndexComponent } from './Pages/public-index/public-index.component';
import { LoginGuard } from '../security/login.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicIndexComponent,
    children: [
      {
        path: 'logIn',
        component: LoginComponent,
        canActivate: [LoginGuard],
      },
      {
        path: '',
        redirectTo: 'logIn',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
