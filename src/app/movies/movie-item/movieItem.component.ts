import { Input, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../domain/movie";

@Component({
    selector: 'app-movieItem',
    templateUrl: './movieItem.component.html',
    styleUrls: ['./movieItem.component.css']
})

export class MovieItem implements OnInit {
    
    
    @Input() movieItem: Movie;
    
    ngOnInit(): void {
        console.log("movieTitem:" + this.movieItem.title)
    }

}