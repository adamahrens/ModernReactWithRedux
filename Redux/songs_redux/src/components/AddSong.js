import React, { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import Actions from '../actions'

const AddSong = ({ addSong }) => {
    const [name, setName] = useState("")
    const [song, setSong] = useState("")

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicArtist">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter artist"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)
                            }} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicSong">
                        <Form.Label>Song</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter song"
                            value={song}
                            onChange={(event) => {
                                setSong(event.target.value)
                            }} />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit" onClick={(event) => {
                event.preventDefault()
                if (name.length > 0 && song.length > 0) {
                    addSong(name, song)
                    setName("")
                    setSong("")
                }
            }}>
                Add Song
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addSong: Actions.addSong })(AddSong)