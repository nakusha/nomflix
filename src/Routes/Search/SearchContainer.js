import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "api";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        pastTerm: "",
        loading: false,
        error: null
    };

    
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== ""){
            this.searchByTerm();
        }
    }

    updateTerm = (event) => {
        const { target: {value} } = event;
        // console.log(target.value); 타이핑값을 얻을 수 있음
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async() => {
        let error, movieResults, tvResults, loading;
        const { searchTerm } = this.state;
        this.setState({loading:true});
        try{
            ({data: { results: movieResults}} = await movies.searchMovies(searchTerm));
            ({data: { results: tvResults}} = await tv.searchTV(searchTerm));
            loading = false
        }catch{
            error = "Can't find Result";
        }finally{
            this.setState({
                loading,
                error,
                movieResults,
                tvResults,
                pastTerm:searchTerm
            });
        }
    }

    render() {
        const {movieResults, tvResults, searchTerm, loading, error, pastTerm} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                pastTerm={pastTerm}
            />
        )
    }
}