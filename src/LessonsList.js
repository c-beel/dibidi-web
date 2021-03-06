import React from 'react';
import { renderToString } from 'react-dom/server';
import { LessonsListItem } from './LessonsListItem';
import { PageTitle } from './PageTitle';
import { get_lessons_list } from './API.js';
import { Table, Row, Container } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import { NewLessonIcon } from './NewLessonIcon';
import './App.css';

export class LessonsList extends React.Component {
  constructor(props) {
    super();
    this.state = {lessons: []};
  }

  componentDidMount() {
    get_lessons_list(function(items) {
      this.set_items(items);
    }.bind(this));
  }

  render_item(item) {
    return renderToString(<LessonsListItem row_number={item.id} title={item.title} />);
  }

  set_items(items) {
    this.setState(
      {
        lessons: items.map(
          (item) => <LessonsListItem key={item.id} row_number={item.id} title={item.title} />
        )
      }
    );
  }
  // dangerouslySetInnerHTML={{ __html: this.state.tbody }} >
  render() {
    return (
      <Container fluid>
        <PageTitle>
          لیست دروس
          <NewLessonIcon />
        </PageTitle>
        <Row>
          <Table className="Lessons-table" hover borderless striped dark>
            <tbody>{this.state.lessons}</tbody>
          </Table>
        </Row>
      </Container>
    )
  }
}
