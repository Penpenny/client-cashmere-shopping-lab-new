import { NgModule } from '@angular/core';
import { ShoppingLibraryComponent } from './shopping-library.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ShoppingLibraryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [ShoppingLibraryComponent]
})
export class ShoppingLibraryModule { }
