import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { StaticQuery, graphql } from 'gatsby';
import bg from '../images/IMG_5483.jpg';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 4rem;
    color: ${props => props.theme.white};
    text-shadow: 0px 4px 3px ${props => props.theme.white}99;
  }
  @media (max-width: 769px) {
    h2 {
      margin-top: 10rem;
      font-size: 2rem;
      color: ${props => props.theme.white};
    }
  }
  @media (max-width: 425px) {
    h2 {
      margin-top: 6rem;
      font-size: 2rem;
      color: ${props => props.theme.white};
    }
  }
`;
const Landing = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container bg={bg} theme={props.theme}>
            <div>
              <h2>{data.contentfulLanding.subtitle}</h2>
            </div>
            <div>
              <h2>LOGO HERE LATER</h2>
            </div>
          </Container>
        );
      }}
    />
  );
};

export default Landing;

const query = graphql`
  query LandingQuery {
    contentfulLanding {
      subtitle
    }
  }
`;
