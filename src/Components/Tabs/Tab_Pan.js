import React, { useContext, useState , useEffect , useRef } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab_Pan(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { children, tabIndex } = props;
  let dropdown_ref = useRef()

  useEffect(() => {
    let handler = (e) => {
      if(dropdown_ref.current == undefined || dropdown_ref.current == null) return
      if (!dropdown_ref.current.contains(e.target)) {
        setActiveTab("");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  if (activeTab === tabIndex) {
    return <div  ref={dropdown_ref} className="tabs-tab-pan">{children}</div>;
  } else {
    return null;
  }
}

export default Tab_Pan;
