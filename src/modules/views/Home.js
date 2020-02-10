import withRoot from './../withRoot';
import React from 'react';
import ProductCategories from './ProductCategories';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';


function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductHowItWorks />
      <ProductCategories />
      <ProductValues />
      <ProductCTA />
    </React.Fragment>
  );
}

export default withRoot(Home);
