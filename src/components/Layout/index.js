import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import bg from '../../images/leo-wieling-Sby_GQz1-5E-unsplash.jpg';
import { theme } from '../theme';
const GlobalStyle = createGlobalStyle`
html{
    overflow: scroll;
    font-size: 62.5%; 
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
  
  h1, 
    h2, 
    h3{
      font-family: "Trirong";
      font-style: italic;
    }
  body {
    margin:0;
    font-family: "Montserrat";
    
  }
  @media all and (max-width: 1200px) {
    width: 100%
    html{
      margin: 0;
    }
    h1{
      font-family: "Trirong";
      text-align: center;
    }
    
  }
}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  background-image: linear-gradient(to bottom, #040404aa, #040404cc),
    url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  div {
    width: 100%;
  }
`;

function Layout({ children }, props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />

          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>

          <Container bg={bg} theme={theme}>
            {children}
          </Container>
        </>
      )}
    />
  );
}

export default Layout;
