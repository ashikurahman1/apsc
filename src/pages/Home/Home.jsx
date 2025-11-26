import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Introduction from '../../components/Home/Introduction/Introduction';
import QuickService from '../../components/Home/QuickService/QuickService';
import AboutInstitute from '../../components/Home/AboutInstitute/AboutInstitute';
import OurTeacher from '../../components/Home/OurTeacher/OurTeacher';

const Home = () => {
  return (
    <main>
      <Banner />
      <Introduction />
      <QuickService />
      <AboutInstitute />
      <OurTeacher />
    </main>
  );
};

export default Home;
