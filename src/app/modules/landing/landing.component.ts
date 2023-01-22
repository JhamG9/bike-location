import { Component, OnInit } from '@angular/core';
import { UserFirestoreService } from 'src/app/firebase/user-firestore.service';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  users = null;
  constructor(
    private userFirestoreService: UserFirestoreService,
    public landingService: LandingService
  ) {}

  ngOnInit(): void {
    this.userFirestoreService.getAllUsers().subscribe((resp: any) => {
      this.users = resp;
    });
  }

  closeMenu() {
    this.landingService.openedMenuLanding = false;
  }
}
