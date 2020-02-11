import withRoot from './../withRoot';
import React from 'react';
import ProductDemo from './ProductDemo';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import AppFooter from './AppFooter';


function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductDemo />
      <ProductHowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
