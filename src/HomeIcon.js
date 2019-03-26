import React from 'react';
import { Image } from 'react-bootstrap';
import { StyledLink } from './StyledLink';
import homeIcon from './static/icons/home.png';

export function HomeIcon(props) {
  return (
    <StyledLink to={"/"}>
      <Image src={homeIcon} className="Icon" alt="Edit" />
    </StyledLink>
  )
}
