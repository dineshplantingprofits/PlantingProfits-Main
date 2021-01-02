import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/account/getallusers`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/account/register`, user);
  }
}
