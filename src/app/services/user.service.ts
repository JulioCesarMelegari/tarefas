import { HttpClient } from '@angular/common/http';
import { Injectable, inject, computed } from '@angular/core';
import { User } from '../models/user.model';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public http = inject(HttpClient);

  public baseURL = 'http://localhost:3000/users';

  private users$ = this.http.get<User[]>(this.baseURL);

  public users = toSignal(this.users$, {initialValue: [] as User[]});

  public totalUsersCount = computed(()=>this.users().length);

}
