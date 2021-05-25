import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemComponent } from './components/pokem/pokem.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {HttpClientModule } from '@angular/common/http';
import { AppRouting2Module } from './app-routing2.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PokemComponent,
    BuscarComponent,
    NavbarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting2Module,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
