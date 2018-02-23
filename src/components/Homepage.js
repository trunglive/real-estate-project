import React, { Component } from 'react';
import Header from './Header';
import FeaturedProperties from './FeaturedProperties';
import MeetMonokel from './MeetMonokel';
import NewlyFeatured from './NewlyFeatured';
import CheapLuxury from './CheapLuxury';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="featured-properties-inner">
        </div>
        <div className="featured-properties-container">
          <FeaturedProperties />
        </div>
        <MeetMonokel />
        <NewlyFeatured />
        <CheapLuxury />
        <Footer />
      </div>
    )
  }
}

export default Homepage;