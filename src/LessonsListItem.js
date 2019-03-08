import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

export class LessonsListItem extends React.Component {
  render() {
    return (
      <tr>
        <td width="10%"> {this.props.row_number} </td>
        <td>
          <StyledLink to={"/lesson/" + this.props.row_number} style={{ textDecoration: 'none' }}>
            <button className="List-item-button">
              {this.props.title}
            </button>
          </StyledLink>
        </td>
      </tr>
    )
  }
}
