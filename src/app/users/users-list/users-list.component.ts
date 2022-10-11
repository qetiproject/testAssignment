import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { UserResult } from '../models/user';
import { Observable } from 'rxjs';
import { UserFacade } from '../user.facade';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService, UserFacade],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status', 'edit'];

  get users$(): Observable<UserResult[]> {
    return this.userFacade.users$;
  }
  
  constructor(
    private userFacade: UserFacade,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void  {
    this.fetchUser();
  }

  fetchUser() {
    this.userFacade.getUsers();
  }

  openDialog(user: UserResult) {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      data: user
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`)
    })
    
  }

}
