import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import bg from '../images/IMG_5483.jpg';
import Img from 'gatsby-image';
import img1 from '../images/ZDrecordingslogoblack.png';

import img2 from '../images/ZDrecordingslogoblue.png';
import img3 from '../images/ZDrecordingslogowhite.png';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 95vh;
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
    padding: 0;
    h2 {
      font-size: 4rem;
      color: ${props => props.theme.white};
      text-shadow: 0px 4px 3px #1d8eb799;
      span {
        color: #1d8eb7;
        text-shadow: 0px 4px 3px #1d8eb799;
      }
    }
    img {
      max-width: 40vw;
      filter: drop-shadow(3px 5px 3px #1d8eb7);
    }
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    .subtitle {
      display: none;
    }
    div {
      height: auto;
      justify-content: center;

      h2 {
        font-size: 2rem;
        color: ${props => props.theme.white};
      }
    }
  }

  @media (max-width: 425px) {
    div {
      h2 {
        font-size: 2rem;
        color: ${props => props.theme.white};
      }
      img {
        max-width: 100%;
      }
    }
  }
`;
const Landing = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const subTitle = data.contentfulLanding.subtitle.split('|');
        return (
          <Container bg={bg} theme={props.theme}>
            <div className="subtitle">
              <h2>
                {subTitle.map((word, key) => {
                  return (
                    <>
                      <span>| </span>
                      {word}
                      <span> |</span>
                    </>
                  );
                })}
              </h2>
            </div>
            <div>
              {/* <Img
                fluid={data.contentfulLanding.logo.fluid}
                fadeIn
                style={{ width: '100%' }}
                imgStyle={{ maxWidth: '50vw', height: 'auto' }}
              /> */}
              <img src={img1} />
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
      logo {
        fluid {
          src
          aspectRatio
          base64
          sizes
          srcSet
          srcSetWebp
          srcWebp
          tracedSVG
        }
      }
      subtitle
    }
  }
`;
