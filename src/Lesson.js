import React from 'react';
import ReactMarkdown from 'react-markdown';
import { get_lesson } from './API.js';
import { PageTitle } from './PageTitle';
import { EditLessonIcon } from './EditLessonIcon';
import './App.css';

export class Lesson extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      text: "",
    };
  }

  componentDidMount() {
    get_lesson(this.props.match.params.lesson_id, function(lesson) {
      this.setState(
        {
          title:  lesson.title,
          text: lesson.text,
        }
      );
    }.bind(this));
  }

  render() {
    return (
      <div>
        <PageTitle>
          { this.state.title }
          <EditLessonIcon lesson_id={this.props.match.params.lesson_id} />
        </PageTitle>
        <ReactMarkdown source={ this.state.text } className="Lesson-text" />
      </div>
    )
  }
}
