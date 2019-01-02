import React, { Component } from "react";
import "./Home.css";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      city: "Jeypore"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        city: "Sydney"
      });
    }, 3000);
  }

  render() {
    const { message = "Welcome Mr. ", name = "Bond" } = this.props;

    return (
      <div className="Home">
        <h1 className="m-4">
          {message}
          {name}
        </h1>
        <h2 className="m-4">{this.state.city}</h2>
      </div>
    );
  }
}

export default Home;
