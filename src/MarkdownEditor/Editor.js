import React from 'react';
import { Input, Form, Button } from 'reactstrap';

import './MarkdownEditor.css';

export class Editor extends React.Component {
  onClick(event) {
    event.preventDefault();
    var form = event.target.parentElement;
    this.props.submitHandler(form['title'].value, form['text'].value);
  }

  render() {
    return (
      <Form method="post" action="http://localhost:8080/lessons/add">
        <Input type="text" name="title" className="Title" value={this.props.title} onChange={ this.props.titleChange } placeholder="عنوان درس" />
        <Input type="textarea" name="text" className="Editor dark" value={this.props.text} onChange={ this.props.textChange } placeholder="متن درس" />
        <Button color="primary" className="Send-button" onClick={ this.onClick.bind(this) }>ارسال</Button>
      </Form>
    )
  }
}
