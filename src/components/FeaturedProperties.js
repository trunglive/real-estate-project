import React, { Component } from 'react';
import HomeCard from './HomeCard';
import { listing } from '../utils/data';
import TypeDropDown from './TypeFilter';
import { Dropdown } from 'semantic-ui-react';
import * as Option from '../utils/helpers';

class FeaturedProperties extends Component {
  state = {
    listing: '',
    typeValue: 'all',
    sortValue: 'default'
  };

  onTypeChange = (event, { value }) => {
    this.setState({
      typeValue: value
    });
  };

  onSortChange = (event, { value }) => {
    this.setState({
      sortValue: value
    });
  };

  componentWillMount() {
    this.setState({
      listing
    });
  }

  render() {
    const { listing, typeValue, sortValue } = this.state;

    return (
      <section className="featured-properties">
        <div className="featured-properties-card-list">
          <div className="featured-properties-nav">
            <Dropdown
              upward
              floating
              options={Option.type}
              text="Type"
              onChange={this.onTypeChange}
              className="type-dropdown"
            />

            <Dropdown
              upward
              floating
              options={Option.sort}
              text="Sort by"
              onChange={this.onSortChange}
              className="sort-dropdown"
            />
          </div>

          {sorting(listing, typeValue, sortValue)}
        </div>
      </section>
    );
  }
}

export default FeaturedProperties;

const sorting = (listing, typeValue, sortValue) => {
  if (sortValue === 'default' && typeValue === 'all') {
    return listing.map(home => <HomeCard key={home.name} {...home} />);
  } else if (sortValue !== 'default' && typeValue === 'all') {
    return listing
      .sort(
        (currentHome, nextHome) =>
          currentHome[sortValue] > nextHome[sortValue] ? 1 : -1
      )
      .map(sortedHome => <HomeCard key={sortedHome.name} {...sortedHome} />);
  } else {
    return listing
      .sort(
        (currentHome, nextHome) =>
          currentHome[sortValue] > nextHome[sortValue] ? 1 : -1
      )
      .filter(home => home.type.toLowerCase() === typeValue)
      .map(filteredHome => (
        <HomeCard key={filteredHome.name} {...filteredHome} />
      ));
  }
};
