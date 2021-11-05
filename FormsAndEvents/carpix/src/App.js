import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Searchbar from './Components/SearchBar';
import ImageList from './Components/ImageList';

import axios from 'axios';

function App() {
  const [search, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchSubmitted = () => {
    console.log(`App search submitted. Current search term is ${search}`)

    // Call Unsplash API with Promises.
    axios.get(`https://api.unsplash.com/search/photos?query=${search}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
      }
    }).then((response) => {
      // Data we got back
      console.log(response.data.results)
      setSearchResults(response.data.results)
    })
      .finally(() => {
        // Clean out Search term
        setSearchTerm("")
      });
  }

  // Call Unsplash API with async/await.
  const asyncSearchSubmitted = async () => {
    console.log(`App search submitted. Current search term is ${search}`)

    // Call Unsplash API.
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${search}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
      }
    })

    console.log(response.data.results)
    setSearchResults(response.data.results)
    setSearchTerm("")
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>CarPix</h1>
          <Searchbar search={search} setSearchTerm={setSearchTerm} onSearchSubmit={asyncSearchSubmitted} />
          <ImageList header='ImageList' results={searchResults} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
