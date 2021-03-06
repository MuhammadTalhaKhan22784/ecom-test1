import React from "react";

const SortByDropDown = (props) => {
  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="sort-btn btn dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.sortName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button className="dropdown-item" type="button">
              Action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SortByDropDown;
