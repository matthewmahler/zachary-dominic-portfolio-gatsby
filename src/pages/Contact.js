import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100vw;

  h1 {
    font-size: 6rem;
    color: ${props => props.theme.white};
    margin: 0 auto;
  }

  form {
    width: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input,
    textarea,
    button {
      margin: 1rem;
      width: 90%;
      font-family: 'Roboto';
    }
    input {
      height: 5rem;
    }
    textarea {
      height: 30rem;
    }
    input[type='submit'] {
      border-radius: 1rem;
      padding: 2rem;
      font-size: 2rem;
      padding: 1rem 3rem;
      color: #292929;
      font-weight: 500;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      border: solid 1px #040404;

      box-shadow: 2px 1000px 1px #fff inset;
      transition: 0.2s;
      :hover {
        box-shadow: none;
        color: #ff0000;
        background-color: #292929;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 4rem;
    }
    form {
      width: 90%;
    }
  }
`;
const Contact = () => {
  return (
    <Layout theme={theme}>
      <div>
        <Nav theme={theme} />
        <Container theme={theme}>
          <h1>Contact</h1>
          <form action="https://formspree.io/myrnpkgx" method="POST">
            <input type="text" placeholder="Name" name="Name" />
            <input type="email" placeholder="Email" name="Email" />
            <input type="date" name="Date Requested" />
            <textarea placeholder="Message" name="Message" />
            <input type="submit" value="Send" name="Send" />
          </form>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;