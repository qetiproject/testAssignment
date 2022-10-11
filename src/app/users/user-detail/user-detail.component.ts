import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable} from 'rxjs';
import { UserView } from '../models';
import { UserService } from '../services';
import { UserFacade } from '../user.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserFacade, UserService]
})
export class UserDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserView,
    ) {}

  ngOnInit(): void {
  }

}
