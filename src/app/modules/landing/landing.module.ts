import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-rounting.module';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LandingComponent, NavbarLandingComponent],
  imports: [CommonModule, LandingRoutingModule, MatIconModule],
})
export class LandingModule {}
