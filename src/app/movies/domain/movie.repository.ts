import { Injectable } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { Movie } from "./movie"

@Injectable()
export class MovieRepositoy implements Repository {

     public getMovies(): Array<Movie> {
        const movies: Movie[] = 
        [{title:"Aquellos que desean mi muerte", image:"http://es.web.img2.acsta.net/pictures/21/04/27/15/37/5016956.jpg"},
        {title:"Nadie (Nobody)", image: "http://es.web.img2.acsta.net/pictures/20/12/15/11/11/4656694.jpg"},
        {title:"El Señor de los Anillos: El retorno del Rey",image: "http://es.web.img2.acsta.net/medias/nmedia/18/89/68/19/20061877.jpg"},
        {title:"Chaos Walking", image: "http://es.web.img2.acsta.net/pictures/20/11/13/15/54/0111059.jpg"},
        {title:"Tiburón blanco", image: "http://es.web.img1.acsta.net/pictures/18/06/11/12/39/2719882.jpg"},
        {title:"Godzilla vs Kong", image: "http://es.web.img2.acsta.net/pictures/21/03/15/18/35/3097205.jpg"},
        {title:"¡Upsss 2!", image: "http://es.web.img3.acsta.net/pictures/20/12/22/18/16/0531955.jpg"},
        {title:"Mortal Kombat", image: "http://es.web.img2.acsta.net/pictures/21/03/30/16/14/5223967.jpg"},
        {title:"Wonder Woman 1984",image: "http://es.web.img1.acsta.net/pictures/20/12/23/12/39/0017180.jpg"},
        {title:"Raya y el último dragón", image: "http://es.web.img1.acsta.net/pictures/21/02/24/11/45/0895010.jpg"}   
        ];
        return movies;
    }

}

export interface Repository {
     getMovies() : Array<Movie>;
}