import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = '';

  private readonly baseURL = "https://localhost:7049/User/login";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): void {
    const body = { email, password };

    this.httpClient.post<any>(this.baseURL, body, this.httpOptions).subscribe(response => {
      this.token = response.token; // Assuming the token is returned in the response with the key 'token'
      console.log('Token:', this.token); // For debugging purposes, you might want to remove this in production
    },
    error => {
      console.error('Error occurred during login:', error);
    });
  }

  // You might also want to add a method to get the saved token
  getToken(): string {
    return this.token;
  }
}
