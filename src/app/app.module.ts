import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartaComponent } from './carta/carta/carta.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,CartaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
