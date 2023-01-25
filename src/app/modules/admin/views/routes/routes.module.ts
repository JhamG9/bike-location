import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-router.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [RoutesComponent],
  imports: [
    FormsModule,
    CommonModule,
    RoutesRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class RoutesModule {}
