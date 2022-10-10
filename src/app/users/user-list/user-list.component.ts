import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { UserResult } from '../models/user';
import { Observable } from 'rxjs';
import { UserFacade } from '../user.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService, UserFacade],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status'];
  
  get users$(): Observable<UserResult[]> {
    return this.userFacade.users$;
  }
  
  constructor(
    private userFacade: UserFacade
    ) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.userFacade.getUsers();
  }
}
