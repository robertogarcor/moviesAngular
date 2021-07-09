import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../../data/domain/movie";
import { MovieItemDetailService } from "../../data/services/movieItemDetail.service";


@Component({
    selector: 'app-movieItem',
    templateUrl: './movieItem.component.html',
    styleUrls: ['./movieItem.component.css'],
})
export class MovieItem {

    @Input() public movieItem: Movie;
    @Input() public lastItem: boolean;
    @Input() public indexItem: number;
    //@Input() public countItem: number;
    
    constructor(private movieItemDetailService : MovieItemDetailService) {    
    }

    selectedItem(item : Movie) {
        this.movieItemDetailService.setMovieItemDetail(item);
        //console.log("movieTitem : " + this.movieItem.title + " -- "  + this.indexItem  + " --> " + this.lastItem);
    }
  
}


