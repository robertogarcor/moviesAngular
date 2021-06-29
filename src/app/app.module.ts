import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDetail } from './movies/movie-detail/movieDetail.component';
import { MovieItem } from './movies/movie-item/movieItem.component';
import { MovieList } from './movies/movie-list/movieList.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItem,
    MovieList,
    MovieDetail 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
