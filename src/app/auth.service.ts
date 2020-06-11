import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registreUrl = "http://localhost:8000/api/registre";
  private _LoginUrl = "http://localhost:8000/api/login";


  constructor(private http: HttpClient) { }

  registerUser( user) {
   return  this.http.post<any>(this._registreUrl, user)
  }

  LoginUser( user) {
    return  this.http.post<any>(this._LoginUrl, user)
   }

  //  loggedIn() {
  //    return !!localStorage.getItem('token')
  //  }




}
