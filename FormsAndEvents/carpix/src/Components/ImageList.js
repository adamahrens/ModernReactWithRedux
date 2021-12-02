import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col} from 'react-bootstrap'
import ImageCard from "./ImageCard";

class ImageList extends Component {

    constructor(props) {
        super(props)
    }

    // Turning a function into arrow function allows babel to perform the automatic binding of the function
    // no need to do the this.function = this.function.bind(this)
    // A third way to do it would be to pass the arrow function inline for the `onClick` prop
    onClick = (event) => {
        event.preventDefault()
        console.log(`onClick called ${this.state.items}`)
    }

    render() {
        return (
            <div>
                <h3 onClick={this.onClick}>{this.props.header}</h3>
                <h5>Found {this.props.results.length}</h5>
                <Container>
                <Row>
                {this.props.results.map(item => {
                    return <Col><ImageCard item={item} /> </Col>
                })}
                </Row>
                </Container>
            </div>
        )
    }
}

export default ImageList;