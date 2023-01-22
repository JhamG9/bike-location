import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService {

  constructor(private db: AngularFireDatabase) {
    
  }

  getAllUsers(){
    return this.db.list('users').valueChanges();
  }

}