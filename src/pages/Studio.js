import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import MediaWrapper from '../components/MediaWrapper';
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
    margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.white};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};

    width: 80%;
    p {
      font-size: 1.5rem;
      max-width: 960px;
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
            <Container theme={theme}>
              <h1>{data.contentfulStudio.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulStudio.studioDescription.childMarkdownRemark
                      .html,
                }}
              />
              <MediaWrapper images={data.contentfulStudio.images} />
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
    }
  }
`;
