import { ComponentRef } from '@angular/core';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingComponent } from 'src/app/components/shared/loading/loading.component';
import { HttpService } from 'src/app/core/http/http.service';
import { Movie } from 'src/app/interface/movie';
import UIkit from 'uikit';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList: Movie[];
  imageList: any[];
  loadingRef: ComponentRef<LoadingComponent>;

  constructor(
    private httpService: HttpService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
    this.loadingRef = this.viewContainerRef.createComponent(factory);

    this.httpService.get().subscribe(response => {
      const result: [] = response.results.sort((a: Movie, b: Movie) => a.release_date > b.release_date);
      this.loadingRef.destroy();
      this.moviesList = result;
    });
  }

}
