import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieRepositoy } from './movies/data/domain/movie.repository';
import { MovieDetail } from './movies/ui/movie-detail/movieDetail.component';
import { MovieItem } from './movies/ui/movie-item/movieItem.component';
import { MovieList } from './movies/ui/movie-list/movieList.component';
import { MovieItemDetailService } from './movies/data/services/movieItemDetail.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiDataSource } from './movies/data/server-db/movie.apiDataSource';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MovieLocalDataSource } from './movies/data/local-db/movie.localDataSource';

@NgModule({
  declarations: [
    AppComponent,
    MovieItem,
    MovieList,
    MovieDetail, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ScrollingModule,
  ],
  providers: [
    MovieRepositoy, 
    MovieItemDetailService, 
    MovieApiDataSource, 
    MovieLocalDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
