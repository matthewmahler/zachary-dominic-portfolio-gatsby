import React, { useState } from 'react';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowSize } from '../Hooks/useWindowSize';
import Playlist from '../components/Playlist';

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
    background: transparent;
    justify-self: flex-start;
    font-size: 6rem;
    color: ${props => props.theme.white};
    margin: 1rem auto;
    border-bottom: 5px solid #1d8eb7;
  }
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.white};
  }
  .portfolioWrapper {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80vh;
    overflow: scroll;
    grid-gap: 3rem;

    color: ${props => props.theme.white};
    div {
      width: 100%;
      .albumCover {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
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
          color: ${props => props.theme.white};

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
  const [songIndex, setSongIndex] = useState(0);
  return (
    <StaticQuery
      query={query}
      render={data => {
        let playlist = [];
        data.contentfulPortfolio.portfolioItems.map(song => {
          return playlist.push({
            cover: song.image.fluid.src,
            name: song.song.title,
            musicSrc: song.song.file.url,
            singer: song.artist,
            id: song.id,
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
                {data.contentfulPortfolio.portfolioItems.map((item, key) => {
                  return (
                    <div key={key}>
                      <span onClick={() => setSongIndex(key)}>
                        <Img
                          fluid={item.image.fluid}
                          fadeIn
                          className="albumCover"
                        />
                      </span>
                      <a
                        href={item.link}
                        className="item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{item.title}</p>
                        <p>{item.artist}</p>
                        <p>{item.role}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
              {playlist.length < 1 ? null : (
                <div className="playlistWrapper">
                  <Playlist index={songIndex} songs={playlist} />
                </div>
              )}
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
