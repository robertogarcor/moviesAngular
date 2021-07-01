import { AfterContentChecked } from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../domain/movie";
import { MovieItemDetailService } from "../services/movieItemDetail.service";

@Component({
    selector: 'app-movieDetail',
    templateUrl: './movieDetail.component.html',
    styleUrls: ['./movieDetail.component.css'],
})
export class MovieDetail implements AfterContentChecked {

    movieItem : Movie

    constructor(private movieItemDetailService : MovieItemDetailService){ 
    }
    
    ngAfterContentChecked(){
        this.movieItem = this.movieItemDetailService.getMovieITemDetail();
    }

    /* onMovieItemDetail(item: Movie): void {
        this.movieItem = item;
        console.log ("movieItem desde detail : " + this.movieItem);
    } */

    
    /* receiveItemSelected(item : Movie) {
        this.movieItem = item;
        console.log(this.movieItem)
    } */

}

