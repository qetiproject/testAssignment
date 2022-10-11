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
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    MatDialogModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
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
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,        
      useValue: {appearance: 'fill'}
    },
    { provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}
    }
  ],
})
export class UsersModule {}
