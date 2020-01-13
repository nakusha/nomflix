import React from "react";
import HomePresenter from "./HomePresenter";
import { movies } from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        let upcoming, popular, nowPlaying, error;
        try{
            ({data: { results: nowPlaying}} = await movies.getNowPlaying());
            ({data: { results: upcoming }} = await movies.getUpcoming());
            ({data: { results: popular }} = await movies.getPopular());
            
        } catch {
            this.setState({
                error: "error!!!"
            });
        } finally {
            this.setState({
                loading:false,
                error,
                upcoming,
                popular,
                nowPlaying
            })
        }
    };

    render() {
        console.log(this.state);
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        return (
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}