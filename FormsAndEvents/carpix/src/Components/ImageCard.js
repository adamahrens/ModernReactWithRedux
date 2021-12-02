import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ImageCard extends Component {

    render() {
        const item = this.props.item
        return <Card key={item.id} style={ {width: '300px', minHeight: '300px', paddingBottom: '10px', paddingTop: '10px'}}>
            <Card.Img src={item.urls.small} />
            <Card.Body>
                <Card.Title>Likes {item.likes}</Card.Title>
                 <Card.Text>
                    {item.alt_description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    }
}

export default ImageCard