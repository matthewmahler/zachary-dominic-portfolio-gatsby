import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowSize } from '../Hooks/useWindowSize';
import PlaylistContainer from '../components/PlaylistContainer';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #04040488, #040404),
    url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    background: transparent;
    justify-self: flex-start;
    font-size: 6rem;
    color: ${(props) => props.theme.white};
    margin: 1rem auto;
    border-bottom: 5px solid #1d8eb7;
  }
  h2 {
    font-size: 3rem;
    color: ${(props) => props.theme.white};
  }

  .portfolioWrapper {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 2fr;

    grid-gap: 3rem;

    color: ${(props) => props.theme.white};
    .albumCoverWrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 80vh;
      overflow: scroll;
    }
    div {
      width: 100%;
      grid-gap: 3rem;
      .albumCover {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        background-color: #eee;
      }
      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        margin: 1rem 0;

        p {
          color: ${(props) => props.theme.white};
          text-align: center;
          font-size: 1.8rem;
          padding: 0.2rem;
          margin: 0 auto;
          :hover {
            color: #1d8eb7;
          }
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
      .albumCoverWrapper {
        grid-template-columns: 1fr 1fr;
        height: auto;

        .item {
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
const Portfolio = () => {
  let [width, height] = useWindowSize();

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (document !== undefined) {
      setCanRender(true);
    }
  }, []);
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        let playlist = [];
        data.contentfulPortfolio.portfolioItems.map((item, key) => {
          return playlist.push({
            src: item.song.file.url,
            label: item.song.title,
          });
        });

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
                <div className="playlistWrapper">
                  {canRender && <PlaylistContainer playlist={playlist} />}
                </div>
                <div className="albumCoverWrapper">
                  {data.contentfulPortfolio.portfolioItems.map((item, key) => {
                    return (
                      <div key={key}>
                        <a
                          href={item.link}
                          className="item"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            fluid={item.image.fluid}
                            fadeIn
                            className="albumCover"
                          />

                          <p>{item.title}</p>
                          <p>{item.artist}</p>
                          <p>{item.genre}</p>
                          <p>{item.role}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
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
        id
        title
        role
        artist
        genre
        link
        song {
          file {
            url
          }
          title
        }
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
