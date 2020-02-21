import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowSize } from '../Hooks/useWindowSize';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #04040488, #040404),
    url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    justify-self: flex-start;
    font-size: 6rem;
    color: ${props => props.theme.white};
    margin: 0 auto;
    margin-bottom: 1rem;
    border-bottom: 5px solid #1d8eb7;
  }
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.white};
  }
  .portfolioWrapper {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .albumCover {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      p {
        color: ${props => props.theme.white};

        font-size: 1.5rem;
        margin: 0 auto;
        :hover {
          color: #1d8eb7;
        }
      }
    }
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 4rem;
    }

    .portfolioWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 425px) {
    .portfolioWrapper {
      grid-template-columns: 1fr;

      .item {
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
const Portfolio = () => {
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
                  ? data.contentfulPortfolio.horizontalBackground.file.url
                  : data.contentfulPortfolio.vertBackground.file.url
              }
            >
              <h1>{data.contentfulPortfolio.title}</h1>
              <div className="portfolioWrapper">
                {data.contentfulPortfolio.portfolioItems.map((item, key) => {
                  return (
                    <a href={item.link} className="item" key={key}>
                      <Img
                        fluid={item.image.fluid}
                        fadeIn
                        className="albumCover"
                      />

                      <p>{item.title}</p>
                      <p>{item.artist}</p>
                      <p>{item.role}</p>
                    </a>
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

export default Portfolio;

const query = graphql`
  query PortfolioQuery {
    contentfulPortfolio {
      portfolioItems {
        title
        role
        artist
        link
        image {
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
      title
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
