import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopIngredientsComponent } from './top-ingredients.component';

@NgModule({
  declarations: [
    TopIngredientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TopIngredientsModule {}
