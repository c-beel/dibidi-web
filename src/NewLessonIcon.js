import React from 'react';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import newIcon from './static/icons/new.png';

export function NewLessonIcon(props) {
  return (
    <StyledLink to={"/lesson/add"}>
      <Image src={newIcon} className="Add-icon Icon" alt="New" />
    </StyledLink>
  )
}
