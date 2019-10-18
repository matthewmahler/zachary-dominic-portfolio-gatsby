import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  width: 100vw;

  h1 {
    font-size: 6rem;
    color: ${props => props.theme.white};
    margin: 1rem auto;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    p {
      width: 80%;
      max-width: 960px;
      font-size: 2rem;
      color: ${props => props.theme.white};
    }
  }
  .profileImages {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-width: 769px) {
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
            <Container theme={theme}>
              <h1>{data.contentfulAbout.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAbout.bio.childMarkdownRemark.html,
                }}
              />
              <div className="profileImages">
                {data.contentfulAbout.profileImages.map((img, key) => {
                  return (
                    <Img
                      fluid={img.fluid}
                      key={key}
                      fadeIn
                      style={{ width: '100%', height: '100%', margin: '1rem' }}
                      imgStyle={{ borderRadius: '100rem' }}
                    />
                  );
                })}
              </div>
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
    }
  }
`;
