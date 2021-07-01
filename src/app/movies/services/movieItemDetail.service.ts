
import { Injectable } from '@angular/core';
import { Movie } from '../domain/movie';
import { MovieDetail } from '../movie-detail/movieDetail.component';
import { MovieItem } from '../movie-item/movieItem.component';

@Injectable()
export class MovieItemDetailService {

    public moviItemDetail : Movie;

    setMovieItemDetail(item : Movie) : void {
        this.moviItemDetail = item;
    }

    getMovieITemDetail() : Movie {
        return this.moviItemDetail;
    }
}