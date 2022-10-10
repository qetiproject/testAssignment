import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent, LoadingSpinnerComponent } from './loading';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, LoadingSpinnerComponent],
  exports: [LoadingComponent],
})
export class SharedModule {}
