import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-router.module';

@NgModule({
  declarations: [
    RoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
