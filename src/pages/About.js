import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import { useWindowSize } from '../Hooks/useWindowSize';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #04040488, #040404),
    url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-size: 6rem;
    color: ${props => props.theme.white};
    margin: 1rem auto;
    border-bottom: 5px solid #1d8eb7;
  }
  article {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding: 4rem;
    div {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 4rem;
        p {
          width: 90%;
          max-width: 960px;
          font-size: 1.8rem;
          color: ${props => props.theme.white};
        }
      }
      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 40%;
      }
    }

    .profilePic {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  @media (max-width: 769px) {
    article {
      grid-template-columns: 1fr;
      padding: 0;
      h1 {
        font-size: 4rem;
      }
      div {
        width: 100%;

        margin-bottom: 2rem;
        p {
          font-size: 1.5rem;
        }
        .profilePic {
          display: none;
        }
      }
    }
  }
  @media (max-width: 425px) {
    p {
      text-align: center;
    }
  }
`;
const About = () => {
  let [width, height] = useWindowSize();

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <Container
              theme={theme}
              bg={
                width > height
                  ? data.contentfulAbout.horizontalBackground.file.url
                  : data.contentfulAbout.vertBackground.file.url
              }
            >
              <h1>{data.contentfulAbout.title}</h1>
              <article>
                <div>
                  <div
                    className="about"
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulAbout.bio.childMarkdownRemark.html,
                    }}
                  />
                  <div className="logo">
                    <Img fluid={data.contentfulLanding.logo.fluid} fadeIn />
                  </div>
                </div>
                <div>
                  <Img
                    className="profilePic"
                    fadeIn
                    fluid={data.contentfulAbout.profileImages[0].fluid}
                  />
                </div>
              </article>
            </Container>
          </Layout>
        );
      }}
    />
  );
};

export default About;

const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      bio {
        childMarkdownRemark {
          html
        }
      }
      profileImages {
        fluid {
          tracedSVG
          srcWebp
          srcSetWebp
          srcSet
          src
          sizes
          base64
          aspectRatio
        }
      }
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
    }
  }
`;
