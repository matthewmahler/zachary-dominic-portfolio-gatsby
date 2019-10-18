import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import Landing from '../Containers/Landing';

const HomePage = () => {
  return (
    <Layout theme={theme}>
      <Nav theme={theme} />
      <Landing theme={theme} />
    </Layout>
  );
};

export default HomePage;
