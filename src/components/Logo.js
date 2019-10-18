import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useWindowSize } from '../Hooks/useWindowSize';
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  #design {
    position: relative;
    width: ${props => (props.width > props.height ? '50vh' : '70vw')};
    height: ${props => (props.width > props.height ? '50vh' : '70vw')};
    margin: auto;
    margin-top: 100px;

    > *,
    #blend > * {
      position: absolute;
      height: 100%;
      width: 100%;
    }

    #rotatedBorder {
      box-sizing: border-box;
      border: 15px #ff0000 solid;
      transform: rotate(45deg);
      box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;
    }

    .grid {
      display: grid;
      grid: repeat(2, 1fr) / repeat(2, 1fr);
      .square {
        background-color: #eee;
      }
    }

    #blend {
      mix-blend-mode: multiply;
    }

    img {
    }

    > img {
      box-shadow: 0 0 20px #bac3c3;
    }
  }
`;
const Logo = props => {
  const [width, height] = useWindowSize();
  return (
    <Container width={width} height={height}>
      <div id="design">
        <Img
          fluid={props.fluid}
          fadeIn
          style={{ position: 'absolute' }}
          imgStyle={{ objectFit: 'cover', boxShadow: '0 0 20px #bac3c3' }}
        />

        <div id="rotatedBorder"></div>

        <div class="grid">
          <div class="square"></div>
          <div></div>
          <div></div>
          <div class="square"></div>
        </div>

        <div id="blend">
          <Img
            fluid={props.fluid}
            fadeIn
            style={{ position: 'absolute' }}
            imgStyle={{ objectFit: 'cover', boxShadow: '0 0 20px #bac3c3' }}
          />
          <div class="grid">
            <div></div>
            <div class="square"></div>
            <div class="square"></div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Logo;
