import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import "./Styles/Product.css";

const Product = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="product-card">
        <div className="p-1 pd-card-top d-flex align-items-center">
          <FaUserCircle
            onClick={() => { history.push("/user-profile") }}
            style={{ fontSize: "22px", marginLeft: "4px", cursor: "pointer" }} />
          <h5 className="ms-3" style={{ fontSize: "18px", paddingTop: "7px" }}>User</h5>
        </div>
        <i className="far fa-heart"></i>
        <h6>Louis asda</h6>

        <Link to="/offer">
          <img
            src="https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg"
            alt="product"
          ></img>
        </Link>
        <div className="product-description">
          <h4>€2,259</h4>
          <h4>Bag/Purse Leather</h4>
          <h4>M / 10</h4>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Product;