import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PrivateIndexComponent } from './Pages/private-index/private-index.component';
import { ConsolaHomeComponent } from './Pages/consola-home/consola-home.component';
import { PrivateRoutingModule } from './private-routing.module';
import { MaterialModule } from '../material/material.module';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SideNavbarItemComponent } from './components/side-navbar-item/side-navbar-item.component';
import { FormClientComponent } from './Pages/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TwoDigitDecimaNumberDirective } from '../two-decimal.directive';
import { TwoDigitDecimaNumberMonthlyFeeDirective } from '../two-decimal-monthlyFee.directive';
import { SearchClientComponent } from './Pages/search-client/search-client.component';
import { TableConsultasComponent } from './components/table-consultas/table-consultas.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    PrivateIndexComponent,
    ConsolaHomeComponent,
    SideNavbarComponent,
    SideNavbarItemComponent,
    FormClientComponent,
    TwoDigitDecimaNumberDirective,
    TwoDigitDecimaNumberMonthlyFeeDirective,
    SearchClientComponent,
    TableConsultasComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [DatePipe],
})
export class PrivateModule {}
