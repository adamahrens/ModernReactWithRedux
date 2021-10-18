import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Searchbar from './Components/SearchBar';
import ImageList from './Components/ImageList';

function App() {
  return (


    <Container>
      <Row>
        <Col>
          <h1>CarPix</h1>
          <Searchbar />
          <ImageList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
