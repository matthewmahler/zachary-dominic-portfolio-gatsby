import React from 'react';
import Layout from '../components/Layout/index';
import { theme } from '../components/theme';
import Landing from '../Containers/Landing';

const HomePage = () => {
  return (
    <Layout theme={theme}>
      <Landing theme={theme} />
    </Layout>
  );
};

export default HomePage;
