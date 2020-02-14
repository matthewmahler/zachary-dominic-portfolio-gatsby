import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import bg from '../images/IMG_5483.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404aa, #040404cc),
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
    p {
      width: 100%;
      font-size: 3rem;
      color: white;
    }
    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 4rem;
      p {
        width: 90%;
        max-width: 960px;
        font-size: 1.5rem;
        color: ${props => props.theme.white};
      }
    }
    .profilePic {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  @media (max-width: 769px) {
    article {
      grid-template-columns: 1fr;
      padding: 2rem;
    }
    h1 {
      font-size: 4rem;
    }
    div {
      margin-bottom: 2rem;
      p {
        font-size: 1.5rem;
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
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <Nav theme={theme} />
            <Container theme={theme} bg={bg}>
              <h1>{data.contentfulAbout.title}</h1>
              <article>
                <div>
                  <div
                    className="about"
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulAbout.bio.childMarkdownRemark.html,
                    }}
                  />
                  <p>LOGO HERE LATER</p>
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
        file {
          url
        }
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
    }
  }
`;
