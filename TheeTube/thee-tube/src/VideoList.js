import React from "react";
import { Container, Row } from 'react-bootstrap'
import VideoItem from "./VideoItem";

const VideoList = ({ items, onSelect }) => {
    return (
        <Container >
            <h1>VideoList</h1>
            <Row>
                {items.map(item =>
                    <VideoItem key={item.videoId} item={item} onSelect={onSelect} />
                )}
            </Row>
        </Container>
    )
}

export default VideoList;