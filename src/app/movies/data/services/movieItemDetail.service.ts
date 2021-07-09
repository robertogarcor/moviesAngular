import { Injectable } from '@angular/core';
import { Movie } from '../domain/movie';

@Injectable()
export class MovieItemDetailService {

    private moviItemDetail : Movie;

    setMovieItemDetail(item : Movie) : void {
        this.moviItemDetail = item;
    }

    getMovieItemDetail() : Movie {
        return this.moviItemDetail;
    }
}