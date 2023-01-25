import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(public adminService: AdminService,
    private utilService: UtilService) {
    this.adminService.checkIsMobile();
  }

  goToPage(route: string){
    this.utilService.goToPage(route);
  }

}
