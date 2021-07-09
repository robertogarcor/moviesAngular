import { Injectable } from "@angular/core";
import { Movie } from "../domain/movie";

@Injectable()
export class MovieLocalDataSource implements LocalDataSource {
    
    private movies : Array<Movie> = []; 

    getMovies(): Array<Movie> {
        return this.movies;
    }

    setMovies(list: Array<Movie>): void {
        list.forEach(item => {
            this.movies.push(item);
        }); 
    }

    size(): number {
        return this.movies.length;
    }
}

export interface LocalDataSource {
    getMovies() : Array<Movie>;
    setMovies(movies : Array<Movie>) : void;
    size() : number;
}