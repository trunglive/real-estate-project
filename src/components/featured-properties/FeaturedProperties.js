import React, { Component } from "react";
import HomeCard from "./HomeCard";
import { listing } from "../../utils/data";
import { Dropdown } from "semantic-ui-react";
import * as Option from "../../utils/helpers";
import { HouseSelectors } from "../../selectors/HouseSelectors";
import { WSAEUSERS, EBUSY } from "constants";

export default class FeaturedProperties extends Component {
  state = {
    listing: "",
    typeValue: "All",
    priceRange: "All",
    areaRange: "All",
    sortValue: "Default",
    equalGrid: false
  };

  onTypeChange = (event, { value }) => {
    this.setState({
      typeValue: value
    });
  };

  onPriceChange = (event, { value }) => {
    this.setState({
      priceRange: value
    });
  };

  onAreaChange = (event, { value }) => {
    this.setState({
      areaRange: value
    });
  };

  onSortChange = (event, { value }) => {
    this.setState({
      sortValue: value
    });
  };

  onEqualGridDisplay = () => {
    this.setState({
      equalGrid: true
    });
  };

  onUnequalGridDisplay = () => {
    this.setState({
      equalGrid: false
    });
  };

  componentWillMount() {
    this.setState({
      listing
    });
  }

  render() {
    const {
      listing,
      typeValue,
      priceRange,
      areaRange,
      sortValue,
      equalGrid
    } = this.state;
    const { searchValue } = this.props;

    return (
      <section className="featured-properties">
        <div className="menu-background">Featured Properties</div>
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
              options={Option.price}
              text="Price"
              onChange={this.onPriceChange}
              className="price-dropdown"
            />

            <Dropdown
              upward
              floating
              options={Option.area}
              text="Area"
              onChange={this.onAreaChange}
              className="area-dropdown"
            />

            <Dropdown
              upward
              floating
              options={Option.sort}
              text="Sort by"
              onChange={this.onSortChange}
              className="sort-dropdown"
            />

            <div className="grid-icon">
              <img
                className="grid-icon--equal"
                src="/icons/equal-grid.svg"
                onClick={this.onEqualGridDisplay}
              />
              <img
                className="grid-icon--unequal"
                src="/icons/unequal-grid.svg"
                onClick={this.onUnequalGridDisplay}
              />
            </div>
          </div>
          {HouseSelectors(
            listing,
            typeValue,
            priceRange,
            areaRange,
            sortValue,
            searchValue
          ).map(home => (
            <HomeCard
              key={home.name}
              {...home}
              equalGrid={equalGrid ? "equal-grid" : "unequal-grid"}
            />
          ))}
        </div>
      </section>
    );
  }
}
