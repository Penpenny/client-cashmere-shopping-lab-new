import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl: string;
  constructor(private http: HttpClient) { }

  setUrl(url) {
    this.serverUrl = url;
  }

  onSignIn(data) {
    return this.http.post(`${this.serverUrl}/api/v1/auth/login`, {email: data.email, password: data.password}).pipe(map(response => response));
  }

  onRegister(data) {
    return this.http.post(`${this.serverUrl}/api/v1/auth/signup`, data).pipe(map(response => response));
  }
}
