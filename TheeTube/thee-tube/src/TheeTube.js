import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Searchbar from './SearchBar';
import Youtube from './Youtube';
import 'bootstrap/dist/css/bootstrap.min.css';

function TheeTube() {
    const [search, setSearchTerm] = useState("");
    const [shouldSearch, setShouldSearch] = useState(false)
    const [searchResults, setSearchResults] = useState([]);
    const [video, setVideo] = useState({})

    useEffect(() => {
        if (shouldSearch === false || search.length === 0) {
            return
        }

        console.log(`App search submitted. Current search term is ${search}`)
        Youtube.get('/search', {
            params: {
                q: `${search}`
            }
        }).then((response) => {
            // Data we got back
            const results = response.data.items.map((item) => {
                return {
                    videoId: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description, thumbnail: item.snippet.thumbnails.default
                }
            })
            setSearchResults(results)
            setVideo(results[0])
            setShouldSearch(false)
        });

    }, [shouldSearch, search]);

    const selectVideo = (videoId) => {
        console.log(`Selected video ${videoId}`)
        const video = searchResults.find((item) => {
            return item.videoId === videoId
        })

        setVideo(video)
    }

    return (
        <div className="App">
            <Container>
                <h1>TheeTube</h1>
                <Searchbar search={search} setSearch={setSearchTerm} shouldSearch={setShouldSearch} />
                <Row>
                    <Col>
                        <VideoDetail video={video} />
                    </Col>
                    <Col>
                        <VideoList items={searchResults} onSelect={selectVideo} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TheeTube;