import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NavbarAdminComponent } from './components/components/navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [AdminComponent, NavbarAdminComponent],
  imports: [CommonModule, MatIconModule, AdminRoutingModule, MatSidenavModule],
})
export class AdminModule {}