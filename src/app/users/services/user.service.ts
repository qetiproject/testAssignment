import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResult, UserView } from '../models/user';
import { BASE_URL } from '../users.module';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  getUsers(): Observable<UserResult[]> {
    return this.http.get<UserResult[]>(`${this.baseUrl}/users`);
  }
  
  getUserById(id: number): Observable<UserView> {
    return this.http.get<UserView>(`${this.baseUrl}/users/${id}`);
  }

  saveUser(user: UserView): Observable<UserView> {
    return this.http.post<UserView>(`${this.baseUrl}/users`, user)
  }
}
