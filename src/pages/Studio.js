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
    margin-bottom: 1rem;
    border-bottom: 5px solid #1d8eb7;
  }
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.white};
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .description {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: ${props => props.theme.white};
        width: 100%;
        padding: 0 2rem;
        text-align: left;
        p {
          margin: 0 auto;
          width: 100%;
          font-size: 2rem;
          max-width: 960px;
          padding-bottom: 1rem;
        }
      }
      .gearGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 1.4rem;
        padding: 0 2rem;
        text-align: center;

        color: ${props => props.theme.white};

        .col {
          width: 100%;
          .list {
            h3 {
              font-size: 1.8rem;

              font-weight: bold;
              color: #1d8eb7;
              margin: 0 auto;
              text-decoration: underline;
              margin-bottom: 0.5rem;
            }
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              margin-bottom: 2rem;
            }
          }
          .drums {
            p {
              font-weight: bold;
              margin: 0.5rem;
            }
          }
        }
      }
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
                <div className="textContainer">
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulStudio.studioDescription
                          .childMarkdownRemark.html,
                    }}
                  />
                  <div className="gearGrid">
                    <div className="col">
                      <div
                        className="computer list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.computer.childMarkdownRemark
                              .html,
                        }}
                      />
                      <div
                        className="software list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.software.childMarkdownRemark
                              .html,
                        }}
                      />
                      <div
                        className="plugins list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.plugins.childMarkdownRemark
                              .html,
                        }}
                      />
                    </div>

                    <div className="col">
                      <div
                        className="interface list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.interface.childMarkdownRemark
                              .html,
                        }}
                      />
                      <div
                        className="monitors list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.monitors.childMarkdownRemark
                              .html,
                        }}
                      />
                      <div
                        className="drums list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.drums.childMarkdownRemark
                              .html,
                        }}
                      />
                      <div
                        className="gear list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.gear.childMarkdownRemark.html,
                        }}
                      />
                      <div
                        className="mics list"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.contentfulStudio.mics.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </div>
                </div>

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
      drums {
        childMarkdownRemark {
          html
        }
      }
      gear {
        childMarkdownRemark {
          html
        }
      }
      mics {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
