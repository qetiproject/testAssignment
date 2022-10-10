import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserDetailComponent,
  UserListComponent,
  UserListItemComponent,
} from '.';
import { environment } from 'src/environments/environment';
import { UserService } from './services';
import { SharedModule } from 'src/shared/shared.module';

export const BASE_URL = new InjectionToken<string>('base api token');

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
  ],
  providers: [
    UserService,
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
  ],
})
export class UsersModule {}
