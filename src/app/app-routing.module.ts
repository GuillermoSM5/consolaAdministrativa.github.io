import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './security/session.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./Public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'consola',
    loadChildren: () =>
      import('./Private/private.module').then((m) => m.PrivateModule),
    canActivate: [SessionGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
