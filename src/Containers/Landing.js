import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowSize } from '../Hooks/useWindowSize';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 85vh;
  width: 100vw;
  position: relative;
  background-image: linear-gradient(to bottom, #04040400, #04040455, #040404),
    url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  div {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 3.4rem;
      color: ${(props) => props.theme.white};
      text-shadow: 0px 4px 3px #1d8eb799;
      margin: 0 auto;
      span {
        color: #1d8eb7;
        text-shadow: 0px 4px 3px #1d8eb799;
      }
    }
    img {
      filter: drop-shadow(3px 5px 3px #1d8eb7);
      margin: 0 auto;
    }
  }
  .logo {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    .subtitle {
      display: none;
    }
    .logo {
      margin-top: 10rem;

      width: 300px;
    }
    div {
      height: auto;
      justify-content: center;

      h2 {
        font-size: 2rem;
        color: ${(props) => props.theme.white};
      }
    }
  }

  @media (max-width: 425px) {
    div {
      .logo {
        margin-top: 5rem;
      }
      h2 {
        font-size: 2rem;
        color: ${(props) => props.theme.white};
      }
      img {
        max-width: 100%;
      }
    }
  }
`;
const Landing = (props) => {
  let [width, height] = useWindowSize();

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const subTitle = data.contentfulLanding.subtitle.split(' ');
        return (
          <Container
            theme={props.theme}
            bg={
              width > height
                ? data.contentfulLanding.horizontalBackground.file.url
                : data.contentfulLanding.vertBackground.file.url
            }
          >
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
            <div className="logo">
              <Img fluid={data.contentfulLanding.logo.fluid} fadeIn />
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
      horizontalBackground {
        file {
          url
        }
      }
      vertBackground {
        file {
          url
        }
      }
    }
  }
`;
