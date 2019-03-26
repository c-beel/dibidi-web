import React from 'react';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import editIcon from './static/icons/edit.png';
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
          <StyledLink to={"/lesson/" + this.props.row_number + "/edit"}>
            <Image src={editIcon} className="Edit-icon Icon" alt="Edit" />
          </StyledLink>
        </td>
      </tr>
    )
  }
}
