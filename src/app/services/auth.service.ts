import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth : AngularFireAuth) { }


//sign up a user

SignUp(email: string , password: string){
  return this.auth.createUserWithEmailAndPassword(email, password);
}


//sign In a user
SignIn(email:string, password: string){
  return this.auth.signInWithEmailAndPassword(email, password)
  .catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
if (errorCode === 'auth/wrong-password') {
  alert('Wrong password.');
} else {
  alert(errorMessage);
}
console.log(error);
});
}

//user state
getUser(){
  return this.auth.authState;
}

//sign out
SignOut(){
  return this.auth.signOut();
}


}
