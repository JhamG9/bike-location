import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { equals } from 'ol/coordinate';

@Injectable({
  providedIn: 'root',
})
export class LocationFirestoreService {
  constructor(private db: AngularFireDatabase) {}

  getAllLocations() {
    return this.db.list('locations').valueChanges();
  }
}
