import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Searchbar from './SearchBar';
import Youtube from './Youtube';
import 'bootstrap/dist/css/bootstrap.min.css';

function TheeTube() {
    // const [searchResults, setSearchResults] = useState([]);

    const searchSubmitted = (search) => {
        console.log(`App search submitted. Current search term is ${search}`)
        Youtube.get('/search', {
            params: {
                q: `${search}`
            }
        })
    }

    return (
        <div className="App">
            <Container>
                <h1>TheeTube</h1>
                <Searchbar onSearchSubmit={searchSubmitted} />
                <Row>
                    <Col>
                        <VideoDetail />
                    </Col>
                    <Col>
                        <VideoList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TheeTube;