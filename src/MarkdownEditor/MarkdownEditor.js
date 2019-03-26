import React from 'react';
import { Row, Col } from 'reactstrap';
import { Editor } from './Editor';
import { Previewer } from './Previewer';
import { get_lesson } from '../API';

import './MarkdownEditor.css';

export class MarkdownEditor extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      text: "",
    }
  }

  componentDidMount() {
    if (this.props.match.params.lesson_id) {
      get_lesson(this.props.match.params.lesson_id, function(lesson) {
        this.setState(
          {
            title:  lesson.title,
            text: lesson.text,
          }
        );
      }.bind(this));
    }
  }

  textChangeHandler(event) {
    this.setState(
      {
        text: event.target.value,
      }
    );
  }

  titleChangeHandler(event) {
    this.setState(
      {
        title: event.target.value,
      }
    );
  }

  render() {
    return (
      <Row className='IDE-container'>
        <Col xs="6" className='Editor-box'>
          <Editor history={this.props.history} lesson_id={this.props.match.params.lesson_id} title={this.state.title} text={this.state.text} titleChange={ this.titleChangeHandler.bind(this) } textChange={ this.textChangeHandler.bind(this) } submitHandler={this.props.submitHandler}/>
        </Col>
        <Col xs="6" className='Previewer-box'>
          <Previewer text={ this.state.text } title={ this.state.title } />
        </Col>
      </Row>
    )
  }
}
