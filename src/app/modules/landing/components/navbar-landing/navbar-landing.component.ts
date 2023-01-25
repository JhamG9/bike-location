import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss'],
})
export class NavbarLandingComponent {
  constructor(private landingService: LandingService,
    private utilService: UtilService) {}

  openCloseMenuLanding() {
    this.landingService.openedMenuLanding =
      !this.landingService.openedMenuLanding;
  }

  goToAdmin(){
    this.utilService.goToPage('/admin');
  }
}
