import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  openedMenu = false;
  isMobile = false;

  constructor(private deviceService: DeviceDetectorService) {}

  openCloseMenu() {
    this.openedMenu = !this.openedMenu;
  }

  isMobileOrTablet() {
    if (this.deviceService.isMobile() || this.deviceService.isTablet()) {
      return true;
    }
    return false;
  }

  checkIsMobile() {
    if (this.deviceService.isMobile() || this.deviceService.isTablet()) {
      this.isMobile = true;
      this.openedMenu = false;
      return;
    }
    this.openedMenu = true;
    this.isMobile = false;
  }
}
