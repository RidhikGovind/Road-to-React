import React, {Component} from "react";

class Search extends Component {
  render() {
    const { onSubmit,children, onChange, value} = this.props;
    return(
      
        <form onSubmit={onSubmit}>
         
          <input
          type="text"
         onChange={onChange}
         value={value}
          placeholder="Enter the name of the book"/>
          <button type="submit">{children}</button>
        </form>
      
    )
  }
}

export default Search