import { Component } from '@angular/core';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss'],
})
export class NavbarLandingComponent {
  constructor(private landingService: LandingService) {}

  openCloseMenuLanding() {
    this.landingService.openedMenuLanding =
      !this.landingService.openedMenuLanding;
  }
}
