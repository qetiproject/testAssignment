import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { UserResult } from '../models/user';
import { Observable } from 'rxjs';
import { UserFacade } from '../user.facade';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService, UserFacade],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status', 'edit'];

  get users$(): Observable<UserResult[]> {
    return this.userFacade.users$;
  }
  
  constructor(
    private userFacade: UserFacade,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.userFacade.getUsers();
  }

  openDialog(user: UserResult): void {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: user,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
