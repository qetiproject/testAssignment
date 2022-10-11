import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserResult, UserView } from '../models';
import { UserService } from '../services';
import { UserFacade } from '../user.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserFacade, UserService]
})
export class UserDetailComponent implements OnInit {
  id!: number;
  
  get userData$(): Observable<UserView> {
    return this.userFacade.userData$;
  }
  constructor(
    private userFacade: UserFacade,
    public dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserView,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userFacade.userDetails(this.id);
  }

}
