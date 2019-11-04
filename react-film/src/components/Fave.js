import React, { Component } from "react";

class Fave extends Component {
  state = {
    isFave: false
  };

  handleClick = () => {
    console.log("handling Fave click!");
    this.setState({ isFave: !this.state.isFave });
    console.log(this.state);
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";

    return (
      <div className={`film-row-fave add_to_queue ${this.state.isFave ? "active" : ""}`}>
        <p className="material-icons" onClick={this.handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}

export default Fave;
