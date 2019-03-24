import React from 'react';
import ReactMarkdown from 'react-markdown';
import { get_lesson } from './API.js';
import { PageTitle } from './PageTitle';
import './App.css';

export class Lesson extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      text: "",
    };
    get_lesson(props.match.params.lesson_id, function(lesson) {
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
        </PageTitle>
        <ReactMarkdown source={ this.state.text } className="Lesson-text" />
      </div>
    )
  }
}
