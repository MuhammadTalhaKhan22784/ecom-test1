import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import Btns from "../loginBtns/loginBtns";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const MobDropDown = ({ closeFunc }) => {
  const history = useHistory();
  return (
    <div className="mob_dropdown_container">
      <div className="main_mob_div">
        <div className="btns_div_mobview">
          <Btns closeFunc={closeFunc} />
        </div>
        <div>
          <p className="category_tag">Categories</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li
              onClick={() => {
                history.push("/product-home/women/see all");
                closeFunc();
              }}
            >
              <LocalMallIcon className="mob_view_icons" />
              <p>Women</p>
            </li>
            <li
              onClick={() => {
                history.push("/product-home/men/see all");
                closeFunc();
              }}
            >
              <LocalMallIcon className="mob_view_icons" />
              <p>Men</p>
            </li>
            <li
              onClick={() => {
                history.push("/product-home/kids/see all");
                closeFunc();
              }}
            >
              <LocalMallIcon className="mob_view_icons" />
              <p>Kids</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="category_tag">Discover</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li
              onClick={() => {
                history.push("/how-it-work");
                closeFunc();
              }}
            >
              <p>How it works</p>
            </li>
            <li
              onClick={() => {
                history.push("/app");
                closeFunc();
              }}
            >
              <p>Get the app</p>
            </li>
            <li
              onClick={() => {
                history.push("/help-center");
                closeFunc();
              }}
            >
              <p>Help Center</p>
            </li>
            <li
              onClick={() => {
                history.push("/infoboard");
                closeFunc();
              }}
            >
              <p>Infoboard</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="category_tag">Company</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li
              onClick={() => {
                history.push("/about-us");
                closeFunc();
              }}
            >
              <p>About Us</p>
            </li>
            <li>
              <p>Jobs</p>
            </li>
            <li>
              <p>Press</p>
            </li>
            <li>
              <p>Advertising</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="category_tag">Policies</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li
              onClick={() => {
                history.push("/safety");
                closeFunc();
              }}
            >
              <p>Trust And Safety</p>
            </li>
            <li
              onClick={() => {
                history.push("/privacy");
                closeFunc();
              }}
            >
              <p>Privacy</p>
            </li>
            <li
              onClick={() => {
                history.push("/terms_and_condition");
                closeFunc();
              }}
            >
              <p>Terms</p>
            </li>
            <li
              onClick={() => {
                history.push("/cookie-policy");
                closeFunc();
              }}
            >
              <p>Cookie Policy </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="category_tag">Privacy</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li>
              <p>Cookie Setting</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="category_tag">Community</p>
        </div>
        <div className="mob_view_ul_div">
          <ul className="mob_view_ul">
            <li>
              <p>Forum</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobDropDown;
