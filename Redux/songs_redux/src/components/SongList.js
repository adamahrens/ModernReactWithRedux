import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Actions from '../actions'

const SongList = ({ songs, selectSong }) => {
    return (
        <Row className="mb-3" >
            <h1>Song List</h1>
            {songs.map(song => {
                return <Row key={song.id}>
                    <Col>
                        {song.song} by {song.artist}
                    </Col>
                    <Col className='pb-3'>
                        <Button variant="primary" type="submit" onClick={(event) => {
                            event.preventDefault()
                            selectSong(song)
                        }}>
                            Select
                        </Button>
                    </Col>
                    <hr />
                </Row>
            })}
        </Row>
    )
}

// State is all the properties in our store from the reducers
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

// connect automatically wraps action creators in a call to store.dispatch
export default connect(mapStateToProps, { selectSong: Actions.selectSong })(SongList);