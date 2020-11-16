import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteMoviesComponent } from './component/favorite-movies.component';
import { FavoriteMoviesRoutingModule } from './favorite-movies-routing.module';


@NgModule({
    declarations: [
        FavoriteMoviesComponent,
    ],
    imports: [
        CommonModule,
        FavoriteMoviesRoutingModule,
    ]
})
export class FavoriteMoviesModule { }
