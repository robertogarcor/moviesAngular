import { Injectable } from "@angular/core";
import { Movie } from "../domain/movie"
import { MovieRepositoy } from "../domain/movie.repository";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { from } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MovieServiceImpl implements MovieService {

    constructor(private repository : MovieRepositoy) {
    }

    getMovies(): Observable<Array<Movie>> {
        return from(this.repository.getMovies()).pipe(shareReplay());
    }
}

interface MovieService {
    getMovies(page: number) : Observable<Array<Movie>>;
}