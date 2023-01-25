import { Component } from '@angular/core';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent {
  constructor(public adminService: AdminService) {}
}
