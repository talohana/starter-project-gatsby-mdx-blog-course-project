import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Hero showPerson />
    </Layout>
  );
};

export default IndexPage;
