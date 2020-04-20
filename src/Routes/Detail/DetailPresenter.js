import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from"Components/Loader";
import { withRouter, Link, Route } from "react-router-dom";
import Production from "../Production";
import Video from "../Video";

const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    position:relative;
    padding:50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    filter: blur(3px);
    opacity: 0.5;
`;

const Content = styled.div`
    display:flex;
    width:100%;
    position:relative;
    position:relative;
    z-index:1;
    height:100%;    
`;

const Cover = styled.div`
    width:30%;
    height:100vh;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    margin-left:10px;
`;

const Title = styled.h3`
    font-size:32px;
    margin-bottom:10px;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span``;

const IMDB = styled.a`
    color:black;
    background-color:orange;
    padding:2px 5px;
    border-color:black;
    border-width:3px;
    border-radius:3px;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:1.5;
    width:50%;
`;

const ExtraInfo = styled.div`
    width:50%;
    margin-top:30px;
`;

const ListExtra = styled.ul`
    
`
const ListItem = styled.li`
    display:inline;
    font-size:20px;
    padding:5px 20px;
    border:1px solid white;
    border-bottom:none;
    border-radius:10px 10px 0 0;
`

const DetailPresenter = withRouter(({location :{pathname}, loading, result, error}) => {
    let isMovie = false;
    if (pathname.includes("movie")){
        isMovie = true;
    }
    console.log(result)

    return(
    loading ? (
        <>
        <Helmet>
            <title>Loading | Noflix</title>
        </Helmet>
        <Loader/> 
        </>
    ) : (
        //error ? <Message> : 
        <Container>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name}{" "} | Nomflix</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
            <Content>
                <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("assets/poster.png")}/>
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                        <Divider>·</Divider>
                        <Item>{result.runtime ? result.runtime : `${result.episode_run_time ? result.episode_run_time[0] : ""}`} min</Item>
                        <Divider>·</Divider>
                        <Item>
                            {result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}
                        </Item>
                        {result.imdb_id && (
                            <>
                                <Divider>·</Divider>
                                <Item>
                                    <IMDB href={`https://www.imdb.com/title/${result.imdb_id}`} target={"_blank"}>IMDB</IMDB>
                                </Item>
                            </>
                        )}
                    </ItemContainer>
                    <Overview>
                        {result.overview}
                    </Overview>
                    <ExtraInfo>
                        <ListExtra>
                            <ListItem active={pathname === `${isMovie ? `/movie/${result.id}/video` : `/show/${result.id}/video`}`}>
                                <Link to={isMovie ? `/movie/${result.id}/video` : `/show/${result.id}/video`}>Video</Link>
                            </ListItem>
                            <ListItem active={pathname === `${isMovie ? `/movie/${result.id}/production` : `/show/${result.id}/production`}`}>
                                <Link to={isMovie ? `/movie/${result.id}/production` : `/show/${result.id}/production`}>Production</Link>
                            </ListItem>
                        </ListExtra>
                        <Route path={isMovie ? `/movie/:id/production` : `/show/:id/production`} component={Production}/>
                        <Route path={isMovie ? `/movie/:id/video` : `/show/:id/video`} component={Video}/>
                    </ExtraInfo>
                </Data>
            </Content>
        </Container>
    )
)});

export default DetailPresenter;