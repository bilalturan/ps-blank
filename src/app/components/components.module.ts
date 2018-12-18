import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomWordComponent } from './random-word/random-word.component';

@NgModule({
  declarations: [RandomWordComponent],
  imports: [
    CommonModule
  ],
  exports: [RandomWordComponent]
})
export class ComponentsModule { }
