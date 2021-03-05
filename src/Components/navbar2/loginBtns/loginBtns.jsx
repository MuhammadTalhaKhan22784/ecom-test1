import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Btns = ({ className ,closeFunc}) => {
  const history = useHistory();
  return (
    <div className={className}>
      <div className="btns_div">
        <button className="acount_btn" onClick={() => {history.push("/signup");closeFunc();}}>
          Sign up
        </button>
        <button className="acount_btn" onClick={() => {history.push("/signin");closeFunc();}}>
          login
        </button>
        <span>
          <HelpOutlineIcon className="help_icon" />
        </span>
        <span className="guide">Your Guide To Vinted</span>
      </div>
    </div>
  );
};
export default Btns;
