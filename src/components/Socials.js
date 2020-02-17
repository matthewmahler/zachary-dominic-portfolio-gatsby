import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
  flex-shrink: 0;
  min-height: 5vh;
  width: 100%;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    margin: 0 2rem;
    :hover {
      filter: brightness(1.5);
    }
  }
  @media (max-width: 769px) {
    transform: scale(0.5);
  }

  @media (max-width: 425px) {
  }
`;
const Socials = () => {
  return (
    <Container>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faFacebook}
          size="5x"
          style={{ color: '#3b5998' }}
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          size="5x"
          style={{ color: '#5851db' }}
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faTwitter}
          size="5x"
          style={{ color: '#1da1f2' }}
        />
      </a>
    </Container>
  );
};

export default Socials;
