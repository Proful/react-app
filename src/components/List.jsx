import React from "react";

// Functional Component
// Create a list of countries
const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key}>{item}</li>
    ))}
  </ul>
);

export default List;
