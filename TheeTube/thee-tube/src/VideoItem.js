import React from "react";
import { Col, Image } from 'react-bootstrap'
const VideoItem = ({ item, onSelect }) => {
    return (
        <Col onClick={() => { onSelect(item.videoId) }}>
            <h2>{item.videoId}</h2>
            <Image src={item.thumbnail.url} rounded />
            <p>{item.title}</p>
        </Col>
    )
}

export default VideoItem;