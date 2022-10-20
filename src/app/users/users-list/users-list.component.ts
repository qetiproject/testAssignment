import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { UserResult } from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../index'
import { StorageService } from 'src/app/services';
import { finalize, map, tap } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status', 'edit'];

  users!: UserResult[];
  loading: boolean = false
  
  constructor(
    public dialog: MatDialog,
    private storage: StorageService,
    private userService: UserService,
  ) {}

  ngOnInit(): void  {
    this.fetchUser();
  }


  fetchUser() {
    let getUser = JSON.parse(this.storage.get('updateUser'))
    this.loading = true
    this.userService.getUsers()
      .pipe(
        tap(n => console.log(n)),
        map(x => {
            this.users = x;
            this.users = this.users.filter(e => e).map(e => e.id === getUser.id ? getUser : e);
          }
        ),
        finalize(() => this.loading = false)
      ).subscribe()
  }


  openDialog(user: UserResult) {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: user,
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result)  {
        this.fetchUser()
      }
    })
    
  }

}
