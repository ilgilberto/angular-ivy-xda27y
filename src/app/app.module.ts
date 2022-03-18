import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartaComponent } from './carta/carta/carta.component';
import { BriscolaService } from './services/BriscolaService';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent,CartaComponent ],
  providers: [BriscolaService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
