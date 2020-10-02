import React, { Component } from "react";
import "./styles.css";
import Search from "./components/Search";
import Table from "./components/Table";

class App extends Component {
  state = {
    list: [
      {
        title: "React",
        url: "https://facebook.github.io/react/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0
      },
      {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ],
    searchTerm: ""
  };

  onDismiss = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => item.objectID !== id)]
    });
  };

  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">

        <Search
        value={searchTerm}
        onChange={this.onSearchChange}>
        Search{" "}
        </Search>

        <Table 
        list={list} 
        pattern={searchTerm} 
        onDismiss={this.onDismiss} />
        
      </div>
    );
  }
}
export default App;
