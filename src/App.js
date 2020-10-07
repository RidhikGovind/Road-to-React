import React, { Component } from "react";
import "./styles.css";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

class App extends Component {
  state = {
    list: [],
    searchTerm: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`)
      .then((res) => this.setState({ list: res.data.hits }));
  }

  onDismiss = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => item.objectID !== id)]
    });
  };

    onChange = (e) => {
      this.setState({ searchTerm: e.target.value})
    }
 

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <h2>Hacker Rank API book finder</h2>
        <Search value={searchTerm} onSubmit={this.onSubmit} onChange={this.onChange}>
          Search{" "}
        </Search>

        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}
export default App;






