import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
    selector: 'app-movieList',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css']
})

export class MovieList implements OnInit {

    movies : any

    constructor(private movieService : MovieService) {

    }

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
            console.log(data)
        });
    }    

}