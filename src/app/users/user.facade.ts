import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services';
import { UserResult } from './models';
import { UserService } from './services';

@Injectable()
export class UserFacade {
  users$!: Observable<UserResult[]>;

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
}
