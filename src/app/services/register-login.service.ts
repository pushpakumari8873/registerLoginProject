import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http: HttpClient) { }

  registerUser(user: RegisterModel) {
    return this.http.post("https://api.freeprojectapi.com/api/UserApp/CreateNewUser", user)
  }

  loginUser(user: LoginModel) {
    return this.http.post("https://api.freeprojectapi.com/api/UserApp/login", user)
  }

}
