import { AfterContentChecked } from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../../data/domain/movie";
import { MovieItemDetailService } from "../../data/services/movieItemDetail.service";

@Component({
    selector: 'app-movieDetail',
    templateUrl: './movieDetail.component.html',
    styleUrls: ['./movieDetail.component.css'],
})
export class MovieDetail implements AfterContentChecked {

    public movieItem : Movie
    public valueProgress : number

    constructor(private movieItemDetailService : MovieItemDetailService){    
    }
    
    ngAfterContentChecked(){
        this.movieItem = this.movieItemDetailService.getMovieItemDetail();
        this.valueProgress = this.movieItem.vote_average * 10;
    }

}

