import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, className} = this.props;
    return (
      <button 
      onClick={onClick} 
      className={className} 
      type="button">
        Dismiss
      </button>
    );
  }
}

export default Button;
