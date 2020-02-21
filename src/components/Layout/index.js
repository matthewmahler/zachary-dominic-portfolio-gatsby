import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';
import Nav from '../Nav';
import Socials from '../Socials';

const GlobalStyle = createGlobalStyle`
html{
    overflow: scroll;
    font-size: 62.5%; 
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;

    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
  
  h1, 
  h2, 
  h3{
      font-family: "Cormorant SC";
      font-style: italic;
      font-weight: bold;
    }
  body {
    margin:0;
    font-family: "Raleway";
    
  }
  @media all and (max-width: 1200px) {
    html{
      margin: 0;
      padding: 0;
      width: 100%
    }
    h1{
      font-family: "Trirong";
      text-align: center;
    }
    
  }
}
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;

  .content {
    flex: 1 0 auto;
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

          <Container theme={theme}>
            <Nav theme={theme} />
            <div className="content">{children}</div>
            <Socials />
          </Container>
        </>
      )}
    />
  );
}

export default Layout;
