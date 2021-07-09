import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Movie } from "../../data/domain/movie";
import { MovieServiceImpl } from "../../data/services/movie.serviceImpl";
import { MovieItemDetailService } from "../../data/services/movieItemDetail.service";
import { MovieItem } from "../movie-item/movieItem.component";

//declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'app-movieList',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css'],
    
})
export class MovieList implements OnInit {

    public showUpButton: boolean = false;
    public movies : Movie[];
    public countMovies : number; 
   
    //@ViewChild(MovieItem) movieItem: MovieItem;

    constructor(private movieService : MovieServiceImpl, 
                private movieItemDetail : MovieItemDetailService) {         
    }
    
    ngOnInit(): void {
        this.loadData();    
    }

    loadData() : void {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data
            let movieSize = this.movies.length
            this.countMovies = movieSize  
            this.movieItemDetail.setMovieItemDetail(this.movies[movieSize - 20]);
        },
        err => { 
            alert("Error connection to server remote!!.");
        });
    }

    // Listener scroll JQuery event to request new data

    @HostListener('scroll', ['$event'])
    onMoviesListScroll($event: Event) {
        //scroll vertical
        let sv = $('.content').scrollTop();
        this.showUpButton = (sv > $('.content').height()) ? true : false;  
        // End Scroll
        if ($(".content").scrollTop() + $(".content").innerHeight() >= $(".content")[0].scrollHeight) {
            this.loadData();
        }
    }


    // Logic btn scroll and btn top

    scrollTop($event : Event) {  
        $(".wrapper-btn-scroll-up").click(function(e: any){
            e.preventDefault();
            $(".content").animate({
                scrollTop : 0
            }, 1000); 
        });
    } 
  
}


