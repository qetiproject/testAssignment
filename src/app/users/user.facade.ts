import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services';
import { UserResult, UserView } from './models';
import { UserService } from './services';

@Injectable()
export class UserFacade {
  users$!: Observable<UserResult[]>;
  userData$!: Observable<UserView>;

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
  ) {
  }

  getUsers() {
    this.loadingService.start();
    this.users$ = this.userService
      .getUsers()
      .pipe(
        finalize(() => this.loadingService.stop()));
  }

  // userDetails(id: number) {
  //   this.loadingService.start();
  //   this.userData$ = this.userService
  //     .getUserById(id)
  //     .pipe(finalize(() => this.loadingService.stop()));
  // }

  submit(body: UserView) {
    this.loadingService.start();
    this.userService
      .saveUser(body)
      .pipe(finalize(() => this.loadingService.stop()))
  }

}
