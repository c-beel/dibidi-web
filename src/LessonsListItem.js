import React from 'react';
import { EditLessonIcon } from './EditLessonIcon';
import { StyledLink } from './StyledLink';
import './App.css';

export class LessonsListItem extends React.Component {
  render() {
    return (
      <tr>
        <td width="10%"> {this.props.row_number} </td>
        <td>
          <StyledLink to={"/lesson/" + this.props.row_number}>
            <button className="List-item-button">
              {this.props.title}
            </button>
          </StyledLink>
        </td>
        <td width="5%">
          <EditLessonIcon lesson_id={this.props.row_number} />
        </td>
      </tr>
    )
  }
}
