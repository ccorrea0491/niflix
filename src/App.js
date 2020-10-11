import React from "react";
import "./App.css";

import Base from "./containers/Base/Base";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends React.Component {
  searchHandler = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <Layout search={this.searchHandler}>
          <Base />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (input) => dispatch(actions.searchInput(input)),
  };
};

export default connect(null, mapDispatchToProps)(App);
