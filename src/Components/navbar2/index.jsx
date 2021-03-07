import React from "react";
import SearchHeader from "./searchbar/searchHead";
import Header from "./header/header";
import SearchBar from "./searchbar/searchHead";
import "./style.css";
import Second_Nav from "../../Layout/Second_Nav";
const Navbar = () => {
  return (
    <div>
      <Header />
      <Second_Nav />
      <div className="mob_search_bar">
        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
