import React, {Component} from "react";
import "./styles.css";




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
      },
      
    ],
    searchTerm: ''
  };

  onDismiss = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => item.objectID !== id)]
    });
  };

  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  
   isSearched = (searchTerm) => (item) =>  
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())


  render() {
    return (
      <div className="App">
        <form>
          <label for="BookTitle"></label>
          <input name="BookTitle" 
          type="text" onChange={this.onSearchChange}
           placeholder="Enter the name of the book"/>
        </form>

        {this.state.list.filter(this.isSearched(this.state.searchTerm)).map((item) => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}> {item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <button type="button" onClick={() => this.onDismiss(item.objectID)}>
              Dismiss
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
