import React from "react";
import TVPresenter from "./TVPresenter"
import {tv} from "api";

export default class extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null,
    };
    async componentDidMount() {
        let topRated, popular, airingToday, error;
        try{
            ({data: {results: topRated}} = await tv.getAiringThisWeek());;
            ({data: {results: popular}} = await tv.getPopular());
            ({data: {results: airingToday}} = await tv.getAiringToday());
        }catch{
            error = "error found!";
        }finally{
            this.setState({
                loading:false,
                topRated,
                popular,
                airingToday,
                error
            })
        }
    }
    render() {
        const {topRated, popular, airingToday, loading, error} = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        )
    }
};