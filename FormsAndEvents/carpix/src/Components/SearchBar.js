import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Searchbar = (props) => {

    const searchSubmited = (event) => {
        event.preventDefault();
        props.onSearchSubmit()
    };

    const searchUpdated = (event) => {
        event.preventDefault();
        console.log(`Search updated! ${event.target.value}`)
        props.setSearchTerm(event.target.value)
    };

    return (
        <div className="searchbar">
            <Form onSubmit={searchSubmited}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search"
                        onChange={searchUpdated}
                        value={props.search}
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