import React from 'react';
import { renderToString } from 'react-dom/server';
import { LessonsListItem } from './LessonsListItem';
import { PageTitle } from './PageTitle';
import { get_lessons_list } from './API.js';
import { Table, Row, Container } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import newIcon from './static/icons/new.png';
import './App.css';

export class LessonsList extends React.Component {
  constructor(props) {
    super();
    this.state = {tbody: []};
    var thisClass = this;
    get_lessons_list(function(items) {
      thisClass.set_items(items);
    });
  }

  render_item(item) {
    return renderToString(<LessonsListItem row_number={item.id} title={item.title} />);
  }

  set_items(items) {
    this.setState(
      {
        tbody: items.map(
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
          <StyledLink to={"/lesson/add"}>
            <Image src={newIcon} className="Add-icon" alt="New" />
          </StyledLink>
        </PageTitle>
        <Row>
          <Table className="Lessons-table" hover borderless striped dark>
            <tbody>{this.state.tbody}</tbody>
          </Table>
        </Row>
      </Container>
    )
  }
}
