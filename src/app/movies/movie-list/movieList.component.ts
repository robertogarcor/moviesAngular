import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../domain/movie";
import { MovieService } from "../services/movie.service";
import { MovieItemDetailService } from "../services/movieItemDetail.service";

@Component({
    selector: 'app-movieList',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css']
})

export class MovieList implements OnInit {

    movies : Movie[]

    constructor(private movieService : MovieService, 
                private movieItemDetail : MovieItemDetailService) {

    }

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
            console.log(data);
            this.movieItemDetail.setMovieItemDetail(this.movies[0]);
        });
    }    

}