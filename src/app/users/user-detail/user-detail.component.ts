import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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
  id!: number;
  form!: FormGroup;
  submited: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: UserView,
    // private userFacade: UserFacade,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

    this.userForm()
  }

  userForm() {
    this.form = new FormGroup({
      name: new FormControl(this.user.name),
      gender: new FormControl(this.user.gender),
      email: new FormControl(this.user.email),
      status: new FormControl({value: this.user.status, disabled: true}),
    });
  }

  openSnackBar() {
    this._snackBar.open('User data succesfull saved!!', 'Succesfull', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  submit() {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    const value = this.form.value;

    const body: UserView = {
      id: this.user.id,
      name:  value.name,
      gender: value.gender,
      email: value.email,
      status: value.status
    };

    // this.userFacade.submit(body);
    this.openSnackBar()
  }

}
