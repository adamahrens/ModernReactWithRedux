import React from "react";
import { Container } from 'react-bootstrap'

const VideoDetail = ({ video }) => {
    return (
        <Container>
            {video.videoId !== null && (
                <div>
                    <h1>VideoDetails</h1>
                    <iframe style={{ width: '500px', height: '300px' }} title={video.videoId} src={`https://www.youtube.com/embed/${video.videoId}`} />
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <div><span>{video.videoId}</span></div>
                </div>
            )}
        </Container>
    )
}

export default VideoDetail;