import './App.css';
import React, {Component} from 'react';
import 'tachyons';
import {Button, Card} from 'react-bootstrap';

class ProjectCard extends Component {
  render() { 
    return (
      <div className="tc">
        <h1>Hello {this.props.name}</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Subtitle style={{ fontSize: '20px', textEmphasisColor: 'black' ,textEmphasisStyle: 'bold' }}>Card Title</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">GitHub</Card.Link>
            </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;