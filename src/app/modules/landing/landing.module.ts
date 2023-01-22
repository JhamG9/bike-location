import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-rounting.module';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [LandingComponent, NavbarLandingComponent, MenuMobileComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatIconModule,
    MatSidenavModule,
  ],
})
export class LandingModule {}
