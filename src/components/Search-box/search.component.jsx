import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, stateFunction }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={stateFunction}
    />
  );
};
