import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    LoadingComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
