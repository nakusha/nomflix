import React from "react";
import DetailPresenter from "./DetailPresenter"
import { movies, tv } from "api";

export default class extends React.Component{
    constructor(props){
        super(props);
        const { location: { pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }
    

    async componentDidMount(){
        let error, result
        // 라우터는 url에 대한 정보를 props로 넘겨준다. match: {params:{지정한 이름}}
        const { 
            match: {
                params: {id}
            },
            history: { push }
        } = this.props;

        const {isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)){
            return push("/");
        }
        
        try{
            if (isMovie){
                ({data: result} = await movies.getMovie(parsedId));
            }else{
                ({data: result} = await tv.getShow(parsedId));
            }
            console.log(result);
        }catch{
            error = "Can't find moview"
        }finally{
            this.setState({
                loading:false,
                result,
                error
            })
        }
        
    }

    render() {
        const {result, error, loading} = this.state;
        
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}