import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: "",
        loading: false,
        error: null
    };
    render() {
        const {movieResult, tvResult, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        )
    }
}