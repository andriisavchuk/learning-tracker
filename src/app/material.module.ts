import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class MaterialModule {}
