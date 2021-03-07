import React, { useState } from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { HiOutlineFlag, HiOutlineUserGroup } from "react-icons/hi";
import { VscTag } from "react-icons/vsc";
import { RiTShirtAirFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GrCurrency, GrUserSettings } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdLockOpen } from "react-icons/md";
import KeyWordLink from "./keywordLink";
import {
  covid,
  selling,
  buying,
  shipping,
  payment,
  safety,
  account,
  community,
  logged_in,
} from "./links_data";
import Detail_links from "./detail_link";

const HelpCenter = () => {
  let [value, setValue] = useState("home");

  const handlePickValue = (e) => {
    setValue(e);
  };

  const handleDetail = (e) => {
    setValue(e);
  };

  return (
    <div className="help_center_container">
      <div className="main_help_center_div">
        <div className="helpcenter_list_div">
          <p className="helpcenter_head">Help Center</p>
          <ul className="helpcenter_ul">
            <li
              onClick={() => handlePickValue("home")}
              style={value === "home" ? { color: "black" } : null}
            >
              Home
            </li>
            <li
              onClick={() => handlePickValue("covid")}
              style={value === "covid" ? { color: "black" } : null}
            >
              Covid 19
            </li>
            <li
              onClick={() => handlePickValue("selling")}
              style={value === "selling" ? { color: "black" } : null}
            >
              Selling
            </li>
            {value === "selling" ? (
              <ul className="help_nested_ul">
                <li>selling process</li>
                <li>listing an item</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("buying")}
              style={value === "buying" ? { color: "black" } : null}
            >
              Buying
            </li>
            {value === "buying" ? (
              <ul className="help_nested_ul">
                <li>Buying process</li>
                <li>Finding an item</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("shipping")}
              style={value === "shipping" ? { color: "black" } : null}
            >
              Shipping
            </li>
            {value === "shipping" ? (
              <ul className="help_nested_ul">
                <li>I'm a seller</li>
                <li>I'm a buyer</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("payment_payout")}
              style={value === "payment_payout" ? { color: "black" } : null}
            >
              Payments & Payouts
            </li>
            {value === "payment_payout" ? (
              <ul className="help_nested_ul">
                <li>payment method</li>
                <li>Vinted wallet</li>
                <li>payouts</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("safety_reporting")}
              style={value === "safety_reporting" ? { color: "black" } : null}
            >
              Safety & Reporting
            </li>
            {value === "safety_reporting" ? (
              <ul className="help_nested_ul">
                <li>seller protection</li>
                <li>buyer protection</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("account_setting")}
              style={value === "account_setting" ? { color: "black" } : null}
            >
              My account & Settings
            </li>
            {value === "account_setting" ? (
              <ul className="help_nested_ul">
                <li>My closet setting</li>
                <li>Profile details</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("community")}
              style={value === "community" ? { color: "black" } : null}
            >
              Community
            </li>
            {value === "community" ? (
              <ul className="help_nested_ul">
                <li>Forum</li>
                <li>Members</li>
              </ul>
            ) : null}
            <li
              onClick={() => handlePickValue("logged_in")}
              style={value === "logged_in" ? { color: "black" } : null}
            >
              Not Logged In
            </li>
          </ul>
        </div>
        {value === "home" ? (
          <div className="helpcenter_search_table_div">
            <div className="help_search_div">
              <div>
                <input
                  type="text"
                  placeholder="Search by keywords"
                  name=""
                  id=""
                />
                <BsSearch />
              </div>
            </div>
            <div className="helpcenter_table_div">
              <p className="topic_head">General Topics</p>
              <div className="table_div_helpcenter">
                <div onClick={() => handlePickValue("covid")}>
                  <HiOutlineFlag className="help_center_icon" />
                  <p> Covid 19</p>
                </div>
                <div onClick={() => handlePickValue("selling")}>
                  <VscTag className="help_center_icon" />
                  <p> Selling</p>
                </div>
                <div onClick={() => handlePickValue("buying")}>
                  <RiTShirtAirFill className="help_center_icon" />
                  <p> Buying</p>
                </div>
                <div onClick={() => handlePickValue("shipping")}>
                  <FaShippingFast className="help_center_icon" />
                  <p> Shipping</p>
                </div>
                <div onClick={() => handlePickValue("payment_payout")}>
                  <GrCurrency className="help_center_icon" />
                  <p> Payments & Payouts</p>
                </div>
                <div onClick={() => handlePickValue("safety_reporting")}>
                  <AiOutlineSafetyCertificate className="help_center_icon" />
                  <p> Safety & Reporting</p>
                </div>
                <div onClick={() => handlePickValue("account_setting")}>
                  <GrUserSettings className="help_center_icon" />

                  <p> My account & Settings</p>
                </div>
                <div onClick={() => handlePickValue("community")}>
                  <HiOutlineUserGroup className="help_center_icon" />
                  <p> Community</p>
                </div>
                <div onClick={() => handlePickValue("logged_in")}>
                  <MdLockOpen className="help_center_icon" />
                  <p> Not Logged In</p>
                </div>
              </div>
            </div>
          </div>
        ) : value === "covid" ? (
          <KeyWordLink obj={covid} head={""} handleDetail={handleDetail} />
        ) : value === "selling" ? (
          <KeyWordLink
            obj={selling}
            head={"Selling"}
            handleDetail={handleDetail}
          />
        ) : value === "buying" ? (
          <KeyWordLink
            obj={buying}
            head={"Buying"}
            handleDetail={handleDetail}
          />
        ) : value === "shipping" ? (
          <KeyWordLink
            obj={shipping}
            head={"Shipping"}
            handleDetail={handleDetail}
          />
        ) : value === "payment_payout" ? (
          <KeyWordLink
            obj={payment}
            head={"Payment & Payouts"}
            handleDetail={handleDetail}
          />
        ) : value === "safety_reporting" ? (
          <KeyWordLink
            obj={safety}
            head={"Safety & Reporting"}
            handleDetail={handleDetail}
          />
        ) : value === "account_setting" ? (
          <KeyWordLink
            obj={account}
            head={"My Account & Settings"}
            handleDetail={handleDetail}
          />
        ) : value === "community" ? (
          <KeyWordLink obj={community} head={""} handleDetail={handleDetail} />
        ) : value === "logged_in" ? (
          <KeyWordLink obj={logged_in} head={""} handleDetail={handleDetail} />
        ) : value === value || value === value ? (
          <Detail_links head={value} />
        ) : null}
      </div>
    </div>
  );
};

export default HelpCenter;
