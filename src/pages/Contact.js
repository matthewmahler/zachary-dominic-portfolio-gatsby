import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import styled from 'styled-components';
import { useWindowSize } from '../Hooks/useWindowSize';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #04040400, #040404),
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
      font-size: 1.5rem;
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
  let [width, height] = useWindowSize();

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout theme={theme}>
            <div>
              <Container
                theme={theme}
                bg={
                  width > height
                    ? data.contentfulContact.horizontalBackground.file.url
                    : data.contentfulContact.vertBackground.file.url
                }
              >
                <h1>Contact</h1>
                <form action="https://formspree.io/xqkqgdba" method="POST">
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
      }}
    />
  );
};
const query = graphql`
  query ContactQuery {
    contentfulContact {
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
export default Contact;
