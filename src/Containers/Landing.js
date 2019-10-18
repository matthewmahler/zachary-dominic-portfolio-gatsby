import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100vw;
  position: relative;

  h2 {
    margin-top: 10rem;
    font-size: 3rem;
    color: ${props => props.theme.white};
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
          <Container theme={props.theme}>
            <Logo fluid={data.contentfulLanding.logo.fluid} />
            <h2>{data.contentfulLanding.subtitle}</h2>
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
      logo {
        fluid {
          tracedSVG
          srcSetWebp
          srcWebp
          srcSet
          src
          sizes
          base64
          aspectRatio
        }
      }
    }
  }
`;
