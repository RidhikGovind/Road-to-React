import React, { Component } from "react";
import "./styles.css";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

const Loading = () => <div>Loading...</div>;

class App extends Component {
  state = {
    list: [],
    searchTerm: "",
    isLoading: false
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.setState({ isLoading: true });

    axios
      .get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then((res) => this.setState({ list: res.data.hits }));
  };

  onDismiss = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => item.objectID !== id)]
    });
  };

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, list, isLoading } = this.state;
    return (
      <div className="App">
        <h2>Hacker Rank API book finder</h2>

        <div className="search-interactions">
          {isLoading ? (
            <Loading />
          ) : (
            <Search
              value={searchTerm}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              onLoad={this.onLoad}
            >
              Search{" "}
            </Search>
          )}
        </div>

        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}
export default App;
