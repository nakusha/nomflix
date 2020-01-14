import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "api";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    
    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== ""){
            this.searchByTerm();
        }
    }

    searchByTerm = async() => {
        let error, movieResults, tvResults, loading;
        const { searchTerm } = this.state;
        try{
            ({data: { results: movieResults}} = await movies.searchMovies(searchTerm));
            ({data: { results: tvResults}} = await tv.searchTV(searchTerm));
            loading = true
        }catch{
            error = "Can't find Result";
        }finally{
            this.setState({
                loading,
                error,
                movieResults,
                tvResults

            });
        }
    }

    render() {
        const {movieResults, tvResults, searchTerm, loading, error} = this.state;
        console.log(this.state);
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}