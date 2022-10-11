import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserDetailComponent,
  UserListComponent,
} from '.';
import { environment } from 'src/environments/environment';
import { UserService } from './services';
import { SharedModule } from 'src/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

export const BASE_URL = new InjectionToken<string>('base api token');

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    MatButtonModule, 
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  declarations: [
    UserListComponent,
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
