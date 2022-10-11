import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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
  userData!: UserView;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // get userData$(): Observable<UserView> {
  //   return this.userFacade.userData$;
  // }

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: UserView,
    private userFacade: UserFacade,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.id = user.id
  }

  ngOnInit(): void {
    this.getUser(this.id);
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

  getUser(id: number){
    this.userService.getUserById(id).subscribe((res) => {
      this.userData= res
    })
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
