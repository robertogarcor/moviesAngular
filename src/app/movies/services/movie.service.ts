import { Injectable } from "@angular/core";
import { Movie } from "../domain/movie"
import { MovieRepositoy } from "../domain/movie.repository";
import { Observable, of } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class MovieService implements MovieServiceInterface {

    constructor(private repository : MovieRepositoy) {
    }

    public getMovies() : Observable<Array<Movie>> {
        return of (this.repository.getMovies())
         
    }
}

interface MovieServiceInterface {
    getMovies() : Observable<Array<Movie>>;
}