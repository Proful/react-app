import React from "react";
import "./Home.css";
import PropTypes from "prop-types";

// Fuctional or stateless component
// props -- parameter sent by another component
const Home = props => {
  const { message = "Welcome Mr. ", name = "Bond" } = props;

  // no specific render method.
  return (
    <div className="Home">
      <h1 className="m-4">
        {message}
        {name}
      </h1>
    </div>
  );
};

// propTypes validation definitions
Home.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Home;
