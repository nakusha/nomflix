import React from "react";
import styled from "styled-components";

const Container = styled.div``
const VideoContainer = styled.div`
    margin:20px 0;
`
const VideoTitle = styled.p`
    font-size:20px;
`

const VideoLink = styled.a`
    text-decoration:none;
`

const VideoPresenter = ({result, loading}) => (
    <Container>
        {(result?.videos.results.map(video => (
            <VideoContainer key={video.id}>
                <VideoLink href={`https://youtu.be/${video.key}`} target="_blank"><VideoTitle>{video.name}</VideoTitle></VideoLink>
            </VideoContainer>
        )))}
    </Container>
)

export default VideoPresenter;