import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './component/movies.component';
import { CardMovieComponent } from 'src/app/components/card-movie/card-movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ]
})
export class MoviesModule { }
