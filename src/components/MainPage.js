import React, { Component } from 'react';

import './MainPage.css';
import Scroll from './Scroll';
import CardList from './CardList';
import Header from './Header';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1 className="tc light-green">Loading...</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
