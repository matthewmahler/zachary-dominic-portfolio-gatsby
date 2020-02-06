import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import MediaWrapper from '../components/MediaWrapper';
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
    margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.white};
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }
  .description {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.white};
    width: 100%;
    padding: 2rem;
    text-align: left;
    p {
      width: 100%;
      font-size: 2rem;
      max-width: 960px;
    }
    ul {
      width: 100%;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 4rem;
    }
    div {
      p {
        text-align: center;
        font-size: 1.25rem;
      }
    }
  }
`;
const Studio = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <Nav theme={theme} />
            <Container theme={theme} bg={bg}>
              <h1>{data.contentfulStudio.title}</h1>
              <div className="grid">
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulStudio.studioDescription
                        .childMarkdownRemark.html,
                  }}
                />
                <MediaWrapper images={data.contentfulStudio.images} />
              </div>
            </Container>
          </Layout>
        );
      }}
    />
  );
};

export default Studio;

const query = graphql`
  query StudioQuery {
    contentfulStudio {
      title
      images {
        fluid {
          tracedSVG
          srcWebp
          srcSet
          src
          srcSetWebp
          sizes
          base64
          aspectRatio
        }
      }
      studioDescription {
        childMarkdownRemark {
          html
        }
      }
      computer {
        childMarkdownRemark {
          html
        }
      }
      interface {
        childMarkdownRemark {
          html
        }
      }
      plugins {
        childMarkdownRemark {
          html
        }
      }
      monitors {
        childMarkdownRemark {
          html
        }
      }
      software {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
