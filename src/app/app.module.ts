import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './core/http/http.service';
import { RequestInterceptor } from './core/interceptors/http-interceptor.service';
import { RouterModule } from '@angular/router';
import { FavoriteMoviesModule } from './pages/favorite-movies/favorite-movies.module';
import { MoviesModule } from './pages/movies/movies.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    MoviesModule,
    FavoriteMoviesModule,
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
