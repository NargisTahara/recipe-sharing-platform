import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';


import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class AuthService {
  token: string;
  private dataStorageService: DataStorageService;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )

      this.router.navigate(['/signin']);
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );

      // Load data when user sign in 
      this.dataStorageService.getRecipes();
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
