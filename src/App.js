import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LessonsList } from './LessonsList';
import { Lesson } from './Lesson';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="App-header">
          <Col xs="auto">
            <Image src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col xs="auto">
            <h1 className="App-title">دی‌بی‌دییییییی</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8">
            <Switch>
              <Route exact path='/' component={LessonsList} />
              <Route path='/lesson/:lesson_id' component={Lesson} />
            </Switch>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
