import React from 'react';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import editIcon from './static/icons/edit.png';

export function EditLessonIcon(props) {
  return (
    <StyledLink to={"/lesson/" + props.lesson_id + "/edit"}>
      <Image src={editIcon} className="Icon" alt="Edit" />
    </StyledLink>
  )
}
