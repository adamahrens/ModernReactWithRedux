import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Searchbar = () => {

    const [search, setSearchTerm] = useState("");

    const searchSubmited = (event) => {
        event.preventDefault();
        console.log("Search submitted")
    };

    const searchUpdated = (event) => {
        console.log(`Search updated! ${event.target.value}`)
        setSearchTerm(event.target.value)
    };

    return (
        <div className="searchbar">
            <Form onSubmit={searchSubmited}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search"
                        onChange={searchUpdated}
                        value={search}
                        onClick={() => { console.log("clicked!") }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Searchbar;