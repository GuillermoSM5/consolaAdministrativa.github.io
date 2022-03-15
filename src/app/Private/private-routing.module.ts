import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivateIndexComponent } from './Pages/private-index/private-index.component';
import { ConsolaHomeComponent } from './Pages/consola-home/consola-home.component';
import { SessionGuard } from '../security/session.guard';
import { FormClientComponent } from './Pages/form-client/form-client.component';
import { SearchClientComponent } from './Pages/search-client/search-client.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateIndexComponent,
    children: [
      {
        path: 'home',
        canActivate: [SessionGuard],
        component: ConsolaHomeComponent,
      },
      {
        path: 'addClient',
        canActivate: [SessionGuard],
        component: FormClientComponent,
      },
      {
        path: 'searchClient',
        canActivate: [SessionGuard],
        component: SearchClientComponent,
      },
      {
        path: 'searchClient/clientes/:id',
        canActivate: [SessionGuard],
        component: FormClientComponent,
      },
      {
        path: '',
        redirectTo: 'home',
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
export class PrivateRoutingModule {}
