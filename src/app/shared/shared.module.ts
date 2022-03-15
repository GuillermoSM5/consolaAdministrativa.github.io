import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { PrintErrorComponent } from './print-error/print-error.component';
import { InenctavidadComponent } from './inenctavidad/inenctavidad.component';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PrintErrorComponent,
    InenctavidadComponent,
    LoaderOverlayComponent
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[
    HeaderComponent,
    PrintErrorComponent,
    InenctavidadComponent,
    LoaderOverlayComponent
  ]
})
export class SharedModule { }
