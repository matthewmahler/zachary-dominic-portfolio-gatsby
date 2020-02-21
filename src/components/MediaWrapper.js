import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100% !important;
  min-height: 90vh;
  .mediaWrapper {
    width: 90%;
    min-height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }
    .my-masonry-grid_column {
      background-clip: padding-box;
    }
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      background: grey;
    }
    @media all and (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-gap: 15px;
      .my-masonry-grid {
        margin-left: -15px; /* gutter size offset */
      }
      .my-masonry-grid_column {
        padding-left: 15px; /* gutter size offset */
      }
      .my-masonry-grid_column > div {
        margin-bottom: 15px; /* space between items */
      }
    }
  }
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;

const MediaWrapper = props => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    991: 3,
    768: 2,
  };
  return (
    <Container theme={props.theme}>
      <div className="mediaWrapper">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {props.images.map((image, key) => {
            return (
              <Img
                fadeIn
                fluid={image.fluid}
                style={{ width: '100%' }}
                key={key}
              ></Img>
            );
          })}
        </Masonry>
      </div>
    </Container>
  );
};

export default MediaWrapper;
