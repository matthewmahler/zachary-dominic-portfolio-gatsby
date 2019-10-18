import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
  .portfolioWrapper {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 1.5rem;
        margin: 0 auto;
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
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <Nav theme={theme} />
            <Container theme={theme}>
              <h1>{data.contentfulPortfolio.title}</h1>
              <div className="portfolioWrapper">
                {data.contentfulPortfolio.portfolioItems.map((item, key) => {
                  return (
                    <>
                      <div className="item">
                        <Img
                          fluid={item.image.fluid}
                          fadeIn
                          style={{ maxWidth: '300px' }}
                        ></Img>
                        <p>{item.title}</p>
                        <p>{item.artist}</p>
                        <p>{item.role}</p>
                      </div>
                      <div className="item">
                        <Img
                          fluid={item.image.fluid}
                          fadeIn
                          style={{ maxWidth: '300px' }}
                        ></Img>
                        <p>{item.title}</p>
                        <p>{item.artist}</p>
                        <p>{item.role}</p>
                      </div>{' '}
                      <div className="item">
                        <Img
                          fluid={item.image.fluid}
                          fadeIn
                          style={{ maxWidth: '300px' }}
                        ></Img>
                        <p>{item.title}</p>
                        <p>{item.artist}</p>
                        <p>{item.role}</p>
                      </div>
                    </>
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
    }
  }
`;
