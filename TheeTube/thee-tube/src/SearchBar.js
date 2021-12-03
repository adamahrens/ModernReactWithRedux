import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'

const Searchbar = (props) => {

    const [search, setSearchTerm] = useState("");

    const searchSubmited = (event) => {
        event.preventDefault();
        props.onSearchSubmit(search)
    };

    const searchUpdated = (event) => {
        event.preventDefault();
        console.log(`Search updated! ${event.target.value}`)
        setSearchTerm(event.target.value)
    };

    return (
        <div className="searchbar">
            <Form onSubmit={searchSubmited}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search"
                                onChange={searchUpdated}
                                value={search} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Searchbar;