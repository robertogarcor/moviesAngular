export interface MovieApi {

    adult: boolean,
    backdrop_path: String, // JavaScript Wrapper Object type 
    genreIds: Array<number>,
    id: number,
    original_language: String, 
    original_title: String,
    overview: string, 
    popularity: number,
    poster_path: string,
    release_date: string, // TypeScript primitive type (Prefer using when possible.)
    title: string,
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