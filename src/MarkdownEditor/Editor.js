import React from 'react';
import { Input, Form, Button } from 'reactstrap';

import './MarkdownEditor.css';

export class Editor extends React.Component {
  submit(event) {
    event.preventDefault();
    var form = document.getElementById("md-editor");
    var data = {
      title: form['title'].value,
      text: form['text'].value,
    };
    if (this.props.lesson_id)
      data.id = parseInt(this.props.lesson_id, 10);
    var history = this.props.history;
    this.props.submitHandler(history)(data);
  }

  submitByCtrlEnter(event) {
    if (event.ctrlKey && event.keyCode === 13)
      this.submit(event);
  }

  render() {
    return (
      <Form id={"md-editor"} onSubmit={this.submit.bind(this)} onKeyDown={this.submitByCtrlEnter.bind(this)}>
        <Input type="text" name="title" className="Title" value={this.props.title} onChange={ this.props.titleChange } placeholder="عنوان درس" />
        <Input type="textarea" name="text" className="Editor dark" value={this.props.text} onChange={ this.props.textChange } placeholder="متن درس" />
        <Button color="primary" className="Send-button" onClick={ this.submit.bind(this) }>ارسال</Button>
      </Form>
    )
  }
}
