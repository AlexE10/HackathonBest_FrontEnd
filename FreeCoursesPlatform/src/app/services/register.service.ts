import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly baseURL = "https://localhost:7049/User/register";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient:HttpClient) { }

  addUser(firstName: string, lastName: string, password: string, email: string, role: string): void 
  { 
    const body = { firstName, lastName, password, email, role};
    this.httpClient.post<any>(this.baseURL, body, this.httpOptions).subscribe();
  }
}
