import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '.';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NotFoundComponent],
  exports: [],
})
export class ShellModule {}
