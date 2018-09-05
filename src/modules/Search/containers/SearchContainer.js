import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SearchActions from "../SearchActions";
import SearchBox from "../components/SearchBox/SearchBox";

class SearchContainer extends Component {
    constructor(props){
        super(props);

        this.state={};
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(city){
        console.log("#Olha a cidade aqui => ",  city);
    }

  render() {
    return (
      <div>
        <SearchBox onSubmit={this.handleSearch} />
      </div>
    )
  }
}

SearchContainer.propTypes = {
    cities: PropTypes.array
  };
  
  SearchContainer.contextTypes = {
    router: PropTypes.object
  };
  
  const mapStateToProps = (state) => {
    return {
      cities: state.cities
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(SearchActions, dispatch)
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
