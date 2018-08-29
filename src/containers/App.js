import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,

    robots: state.requestRobots.robots,

    isPending: state.requestRobots.isPending,

    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event =>
      dispatch(setSearchField(event.target.value)),

    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      robots,
      isPending
    } = this.props;

    const filterRobots = robots.filter(robot =>
      robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return isPending ? (
      <h1 className="tc light-green">Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
