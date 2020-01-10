import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "e0b40fb2681aa865da5282d07bb62fef",
        language: "ko-KR"
    }
});

export const tv = {
    getAiringThisWeek: () => api.get("tv/on_the_air"),
    getPopular: () => api.get("tv/popular"),
    getAiringToday: () => api.get("tv/airing_today"),
    getShow: id => api.get(`tv/${id}`, {
        params: {
            append_to_response:"videos"
        }
    }),
    searchTV: term => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const movies = {
    getNowPlaying: () => api.get("movie/now_playing"),
    getUpcoming: () => api.get("movie/upcoming"),
    getPopular: () => api.get("movie/popular"),
    getMovie: id => api.get(`movie/${id}`, {
        params: {
            append_to_response:"videos"
        }
    }),
    searchMovies: term => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
            
        }
    })
};