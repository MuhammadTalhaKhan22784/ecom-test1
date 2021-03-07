import React, { useState } from "react";
import { FcExpand } from "react-icons/fc";
import "./style.css";
import CategoryDropDownMenu from "./dropdown_menu";
import SizeDropDown from "./size_dropdown";
import ColorDropDown from "./color_dropdown";
import BrandDropDown from "./brand_dropdown";
import ConditionDropDown from "./condition_dropdown";
import PriceDropDown from "./price_dropdown";

const CategoryDropDown = () => {
  // states for catalog drop down

  let [open, setOpen] = useState(false);
  let [category, setCategory] = useState(false);
  let [subCategory, setSubCategory] = useState(false);
  let [value, setValue] = useState("");
  let [valueTwo, setValueTwo] = useState("");

  const handleOpen = () => {
    setOpen(!open);
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (opensize) {
      setOpenSize(!opensize);
    }
    if (openColor) {
      setOpenColor(!openColor);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openBrand) {
      setOpenBrand(!openBrand);
    }
    if (openCondition) {
      setOpenCondition(!openCondition);
    }
    if (openPrice) {
      setOpenPrice(!openPrice);
    }
  };
  const handleShowWomen = (e) => {
    setValue(e);
    if (open) {
      setOpen(!open);
    }
    setCategory(!category);
  };
  const handleBack = () => {
    setOpen(!open);
    setCategory(!category);
  };
  const handleStepTwo = (e) => {
    setValueTwo(e);
    if (category) {
      setCategory(!category);
    }
    setSubCategory(!subCategory);
  };
  const handleBacktwo = () => {
    setSubCategory(!subCategory);
    setCategory(!category);
  };

  // states fro size drop down

  let [opensize, setOpenSize] = useState(false);
  let [sizeStepTow, setsizeStepTow] = useState(false);
  let [valueSize, setValueSize] = useState("");

  // functions for open size drop down

  const handleSize = () => {
    setOpenSize(!opensize);
    if (open) {
      setOpen(!open);
    }
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openColor) {
      setOpenColor(!openColor);
    }
    if (openBrand) {
      setOpenBrand(!openBrand);
    }
    if (openCondition) {
      setOpenCondition(!openCondition);
    }
    if (openPrice) {
      setOpenPrice(!openPrice);
    }
  };

  const handleName = (e) => {
    setValueSize(e);
    setsizeStepTow(!sizeStepTow);
    if (opensize) {
      setOpenSize(!opensize);
    }
  };
  const handleBackSize = () => {
    if (!opensize) {
      setOpenSize(!opensize);
    }
    setsizeStepTow(!sizeStepTow);
  };

  // states for color drop down

  let [openColor, setOpenColor] = useState(false);

  // functions for color dropdown

  const handleColor = () => {
    setOpenColor(!openColor);
    if (open) {
      setOpen(!open);
    }
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (opensize) {
      setOpenSize(!opensize);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openBrand) {
      setOpenBrand(!openBrand);
    }
    if (openCondition) {
      setOpenCondition(!openCondition);
    }
    if (openPrice) {
      setOpenPrice(!openPrice);
    }
  };

  // functions for brand drop down

  let [openBrand, setOpenBrand] = useState(false);

  const handleBrand = () => {
    setOpenBrand(!openBrand);
    if (open) {
      setOpen(!open);
    }
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (opensize) {
      setOpenSize(!opensize);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openColor) {
      setOpenColor(!openColor);
    }
    if (openCondition) {
      setOpenCondition(!openCondition);
    }
    if (openPrice) {
      setOpenPrice(!openPrice);
    }
  };

  // functions for condition drop down

  let [openCondition, setOpenCondition] = useState(false);

  const handleCondition = () => {
    setOpenCondition(!openCondition);
    if (open) {
      setOpen(!open);
    }
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (opensize) {
      setOpenSize(!opensize);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openColor) {
      setOpenColor(!openColor);
    }
    if (openBrand) {
      setOpenBrand(!openBrand);
    }
    if (openPrice) {
      setOpenPrice(!openPrice);
    }
  };

  //    functions for price drop down

  let [openPrice, setOpenPrice] = useState(false);

  const handlePrice = () => {
    setOpenPrice(!openPrice);
    if (open) {
      setOpen(!open);
    }
    if (category) {
      setCategory(!category);
    }
    if (subCategory) {
      setSubCategory(!subCategory);
    }
    if (opensize) {
      setOpenSize(!opensize);
    }
    if (sizeStepTow) {
      setsizeStepTow(!sizeStepTow);
    }
    if (openColor) {
      setOpenColor(!openColor);
    }
    if (openBrand) {
      setOpenBrand(!openBrand);
    }
    if (openCondition) {
      setOpenCondition(!openCondition);
    }
  };

  return (
    <div className="ms-4 catalog_drop_down_container">
      <div className="list_drop_downs">
        <div>
          <p onClick={handleOpen} className="catalog_tag">
            Catalog <FcExpand />
          </p>
          <CategoryDropDownMenu
            openDropDown={open}
            women={category}
            handleShowWomen={handleShowWomen}
            handleBack={handleBack}
            value={value}
            valueTwo={valueTwo}
            handleStepTwo={handleStepTwo}
            stepThree={subCategory}
            handleBacktwo={handleBacktwo}
          />
        </div>
        <div className="size_drop_down2">
          <p onClick={handleSize} className="catalog_tag">
            size <FcExpand />
          </p>
          <SizeDropDown
            opensize={opensize}
            handleName={handleName}
            valueSize={valueSize}
            handleBackSize={handleBackSize}
            sizeStepTow={sizeStepTow}
          />
        </div>
        <div className="size_drop_down3">
          <p onClick={handleColor} className="catalog_tag">
            color <FcExpand />
          </p>
          <ColorDropDown openColor={openColor} />
        </div>

        <div className="size_drop_down4">
          <p onClick={handleBrand} className="catalog_tag">
            Brand <FcExpand />
          </p>
          <BrandDropDown openBrand={openBrand} />
        </div>
        <div className="size_drop_down5">
          <p onClick={handlePrice} className="catalog_tag">
            Price <FcExpand />
          </p>
          <PriceDropDown openPrice={openPrice} />
        </div>
        <div className="size_drop_down6">
          <p onClick={handleCondition} className="catalog_tag">
            Condition <FcExpand />
          </p>
          <ConditionDropDown openCondition={openCondition} />
        </div>
      </div>
    </div>
  );
};

export default CategoryDropDown;
