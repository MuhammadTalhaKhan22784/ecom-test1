import React, { useState, useContext , useRef , useEffect } from "react";
import "./Tab.css";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { label, tabIndex } = props;
  let active = activeTab === tabIndex;
  let dropdown_ref = useRef()


  



  return (
    <li
      className={`tabs-tab ${active ? "active" : ""}`}
      onClick={() => setActiveTab(activeTab == tabIndex ? "" : tabIndex)}
      ref={dropdown_ref}
    >
      {label}
    </li>
  );
}

export default Tab;
