import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:5000/users";

  createUser(user: {userName : string , password : string}) {
    return this.http.post(this.BASE_URL,user);
  }

  constructor(private http:HttpClient) { }
}
