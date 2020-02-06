import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
    justify-self: flex-start;
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
      text-decoration: none;
      p {
        color: ${props => props.theme.white};

        font-size: 1.5rem;
        margin: 0 auto;
        :hover {
          color: #ff0000;
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
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <Nav theme={theme} />
            <Container theme={theme} bg={bg}>
              <h1>{data.contentfulPortfolio.title}</h1>
              <div className="portfolioWrapper">
                {data.contentfulPortfolio.portfolioItems.map((item, key) => {
                  return (
                    <a href={item.link} className="item" key={key}>
                      <Img
                        fluid={item.image.fluid}
                        fadeIn
                        style={{ maxWidth: '300px' }}
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
    }
  }
`;
