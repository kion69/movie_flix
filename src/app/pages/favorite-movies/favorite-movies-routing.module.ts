import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteMoviesComponent } from './component/favorite-movies.component';


const routes: Routes = [{
    path: '',
    component: FavoriteMoviesComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FavoriteMoviesRoutingModule { }
