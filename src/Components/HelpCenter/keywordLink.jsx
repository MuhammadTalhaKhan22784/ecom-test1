import React from "react";
import { RiFlag2Line } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";

const KeyWordLink = ({ obj, head, handleDetail }) => {
  return (
    <div className="keyWords_links_container">
      <div className="main_keyWords_links_div">
        <div className="keyWords_links">
          {obj.recommend.length ? (
            <>
              <h3 className="keyWords_links_head">{head}</h3>
              <p className="keyWords_links_recommend">Recommended for you</p>
              {obj.recommend.map((value, index) => {
                return (
                  <ul className="keyWords_links_ul" key={index}>
                    <li onClick={() => handleDetail(value)}>
                      <div className="keyWords_links_sub_div_li">
                        <RiFlag2Line className="keyWords_links_icon" />
                        <p className="keyWords_links_li_para">{value}</p>
                      </div>
                      <GrFormNext className="keyWords_links_icon" />
                    </li>
                  </ul>
                );
              })}
            </>
          ) : null}
        </div>
        <>
          <p className="keyWords_links_recommend">Pick a Topic</p>
          {obj.topic.map((value, i) => {
            return (
              <ul className="keyWords_links_ul" key={i}>
                <li onClick={() => handleDetail(value)}>
                  <p className="keyWords_links_li_para">{value}</p>
                  <GrFormNext className="keyWords_links_icon" />
                </li>
              </ul>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default KeyWordLink;
