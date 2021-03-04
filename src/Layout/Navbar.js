import React, { useState } from "react";
import Second_Nav from "../Layout/Second_Nav";
import { Link } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";
import MobViewNav from "./MobViewNav";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="top-nav navbar navbar-expand-lg navbar-light">
        <div className="d-flex justify-content-between">
        <Link
          className="navbar-logo"
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
        >
          DIBSTUFF
        </Link>
        <button
            onClick={() => setShow(!show)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <hr className="top-hr" />
    {
      !show && 
      <div className="ms-3 mb-input input-group">
        <button
          className="btn btn-outline-secondary custom-gray dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Catalogue
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
        <input
          type="text"
          className="form-control custom-gray"
          placeholder="Search for items"
          aria-label="Text input with dropdown button"
        />
      </div>
    }

        <div className="top-btn">
          <button type="button" className="lgn-sign-btn">
            Sign up | Log in
          </button>
          <button type="button" className="sell-btn">
            Sell now
          </button>
          {/* <i className="fa fa-info-circle" aria-hidden="true"></i> */}
          <AiFillInfoCircle />
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light flex-column">
        <div className="container-fluid d-flex">
          
          <div
            className="custom-collapse-nav collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="mb-view top-btn">
              <button type="button" className="lgn-sign-btn">
                Sign up | Log in
              </button>
              <button type="button" className="sell-btn">
                Sell now
              </button>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <Second_Nav />
            <MobViewNav />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
