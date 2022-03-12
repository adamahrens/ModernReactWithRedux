import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import AddSong from './components/AddSong';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  return (
    <div className="App">
      <Container>
        <AddSong />
        <Row>
          <Col>
            <SongList />
          </Col>
          <Col>
            <SongDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
