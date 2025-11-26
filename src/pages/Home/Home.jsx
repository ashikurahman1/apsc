import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Introduction from '../../components/Home/Introduction/Introduction';
import QuickService from '../../components/Home/QuickService/QuickService';

const Home = () => {
  return (
    <main>
      <Banner />
      <Introduction />
      <QuickService />
    </main>
  );
};

export default Home;
