import React from 'react';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import deleteIcon from './static/icons/delete.png';

export function DeleteLessonIcon(props) {
  return (
    <StyledLink to={"/lesson/" + props.lesson_id + "/delete"}>
      <Image src={deleteIcon} className="Icon" alt="Edit" />
    </StyledLink>
  )
}
