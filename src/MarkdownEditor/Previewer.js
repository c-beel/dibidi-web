import React from 'react';
import ReactMarkdown from 'react-markdown';

import { PageTitle } from '../PageTitle';

import './MarkdownEditor.css';

export class Previewer extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>
          { this.props.title }
        </PageTitle>
        <ReactMarkdown source={ this.props.text } className="Lesson-text" />
      </div>
    )
  }
}
