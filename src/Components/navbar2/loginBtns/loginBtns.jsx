import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Btns = ({ className, closeFunc }) => {
  let [func, setFunc] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  if (width < 950) {
    func = true;
    // close = false
  }

  const history = useHistory();
  return (
    <div className={className}>
      <div className="btns_div">
        <button
          className="acount_btn"
          onClick={() => {
            history.push("/signup");
            {
              if (func) closeFunc();
            }
          }}
        >
          Sign up
        </button>
        <button
          className="acount_btn"
          onClick={() => {
            history.push("/signin");
            {
              if (func) closeFunc();
            }
          }}
        >
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
