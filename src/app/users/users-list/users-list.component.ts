import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserResult } from '../models';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      data: {
        name: 'keti'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`)
    })
    
  }

}
