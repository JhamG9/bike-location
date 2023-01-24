import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, MatIconModule, AdminRoutingModule, MatSidenavModule],
})
export class AdminModule {}