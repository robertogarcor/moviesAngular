export interface MovieApi {

    adult: boolean,
    backdrop_path: String,
    genreIds: Array<number>,
    id: number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: number,
    poster_path: String,
    release_date: String,
    title: String,
    video: boolean,
    vote_average: number,
    vote_count: number

}

export interface MovieApiResult {

    page: number,
    results : Array<MovieApi>,
    total_pages : number,
    total_results : number
    
}