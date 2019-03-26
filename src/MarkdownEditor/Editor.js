import React from 'react';
import { Input, Form, Button } from 'reactstrap';

import './MarkdownEditor.css';

export class Editor extends React.Component {
  onClick(event) {
    event.preventDefault();
    var form = event.target.parentElement;
    var data = {
      title: form['title'].value,
      text: form['text'].value,
    };
    if (this.props.lesson_id)
      data.id = parseInt(this.props.lesson_id);
    this.props.submitHandler(data);
  }

  render() {
    return (
      <Form>
        <Input type="text" name="title" className="Title" value={this.props.title} onChange={ this.props.titleChange } placeholder="عنوان درس" />
        <Input type="textarea" name="text" className="Editor dark" value={this.props.text} onChange={ this.props.textChange } placeholder="متن درس" />
        <Button color="primary" className="Send-button" onClick={ this.onClick.bind(this) }>ارسال</Button>
      </Form>
    )
  }
}
