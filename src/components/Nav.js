import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  width: 100vw;
  min-height: 5vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.black};
  position: sticky;
  z-index: 100;
  h1 {
    width: auto;
    font-size: 3rem;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding-left: 2rem;
    height: 100%;
    a {
      color: ${props => props.theme.white};
      text-decoration: none;
      :hover {
        color: #1d8eb7;
      }
    }
  }
  ul {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.8rem;
    margin: 0 auto;
    li {
      display: inline;
      a {
        color: ${props => props.theme.white};
        text-decoration: none;
        :hover {
          color: #1d8eb7;
        }
      }
    }
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr;
    h1 {
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }
    ul {
      margin-bottom: 0.5rem;

      font-size: 1.5rem;
      padding: 0;
    }
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    h1 {
      padding: 0;
      font-size: 2rem;
    }
    ul {
      font-size: 1.5rem;
      padding: 0;
    }
  }
`;

const Nav = props => {
  return (
    <>
      <Container theme={props.theme}>
        <h1>
          <Link to="/">Zachary J. Dominic</Link>
        </h1>

        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Credits</Link>
          </li>
          <li>
            <Link to="/Studio">Studio</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Nav;
