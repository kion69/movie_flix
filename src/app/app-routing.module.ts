import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'filmes',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favorite-movies/favorite-movies.module').then(m => m.FavoriteMoviesModule)
  },
  {
    path: '',
    redirectTo: '/filmes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
