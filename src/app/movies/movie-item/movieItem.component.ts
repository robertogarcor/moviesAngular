import { Input} from "@angular/core";
import { Component } from "@angular/core";
import { Movie } from "../domain/movie";
import { MovieItemDetailService } from "../services/movieItemDetail.service";


@Component({
    selector: 'app-movieItem',
    templateUrl: './movieItem.component.html',
    styleUrls: ['./movieItem.component.css'],
})
export class MovieItem {

    @Input() movieItem: Movie;
    
    constructor(private movieItemDetailService : MovieItemDetailService) {
    }

    selectedItem(item : Movie) {
        this.movieItemDetailService.setMovieItemDetail(item);
        console.log("movieTitem:" + this.movieItem.title)

    }


  
}


