import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter.jsx -- Constructor");

    // Constructor is the best place to init local state.
    // place to create array, put empty string etc
    this.state = {
      count: 0,
      imageUrl: ""
    };
  }

  componentWillMount() {
    console.log("Counter.jsx -- Component will mount");

    // This is the first place where to put some default data..
    this.setState({
      count: 1,
      imageUrl: "https://picsum.photos/100"
    });
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm p-3">Increment</button>
        <br />
        <img src={this.state.imageUrl} alt="counter" className="mt-3" />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-3 p-3 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
