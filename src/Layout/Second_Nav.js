import React from "react";
import { Link, useHistory,useParams } from "react-router-dom"
import Tabs from "../Components/Tabs/Tabs";
import Tab from "../Components/Tabs/Tab";
import Tab_Pan from "../Components/Tabs/Tab_Pan";
import Tab_DropDown from "../Components/Tabs/Tab_DropDown";
import { CgMenuGridO } from "react-icons/cg";
import {
  GiAmpleDress,
  GiRunningShoe,
  GiBabyBottle,
  GiSchoolBag,
} from "react-icons/gi";
import { BsFillBagFill, BsThreeDots } from "react-icons/bs";
import { SiSmartthings } from "react-icons/si";
import {
  GiPerfumeBottle,
  GiPirateCoat,
  GiTrojanHorse,
  GiRockingChair,
} from "react-icons/gi";
import { FiWatch } from "react-icons/fi";
import { MdStyle, MdToys } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import About_Tab from "../Components/Tabs/About_Tab";

function Second_Nav() {
  const history = useHistory();
  
  let items = {
    dropdown_1: {
      main: [
        { name: "see all", pathName : "Women" , link: "/product-home/women/see all",press : "sec_0", icon: <CgMenuGridO /> },
        { name: "Clothes", link: "", press: "sec_1", icon: <GiAmpleDress /> },
        { name: "shoes", link: "", press: "sec_2", icon: <GiRunningShoe /> },
        { name: "bags", link: "", press: "sec_3", icon: <BsFillBagFill /> },
        {
          name: "accessories",
          press: "sec_4",
          link: "",
          icon: <SiSmartthings />,
        },
        { name: "beauty", link: "", press: "sec_5", icon: <GiPerfumeBottle /> },
      ],
      sec_1: {
        item_1: [
          { name: "see all",  link: "/product-home/women/see all", icon: "" },
          { name: "jumpers & jewellers", link: "/product-home/women/jumpers & jewellers", icon: "" },
          {  name: "dresses", link: "/product-home/women/dresses", icon: "" },
          {  name: "tops & T-Shirts", link: "/product-home/women/tops & T-Shirts", icon: "" },
          {  name: "Trouser & legging", link: "/product-home/women/Trouser & legging", icon: "" },
          {  name: "jumpsuits & playsuits", link: "/product-home/women/jumpsuits & playsuits", icon: "" },
          {  name: "lengeri & nightware", link: "/product-home/women/lengeri & nightware", icon: "" },
          {  name: "active ware", link: "/product-home/women/active ware", icon: "" },
          {  name: "other clothing", link: "/product-home/women/other clothing", icon: "" },
        ],
        item_2: [
          {  name: "see all", link: "", icon: "" },
          {  name: "jumpers & jewellers", link: "", icon: "" },
          {  name: "dresses", link: "", icon: "" },
          {  name: "tops & T-Shirts", link: "", icon: "" },
          {  name: "Trouser & legging", link: "", icon: "" },
          {  name: "jumpsuits & playsuits", link: "", icon: "" },
          {  name: "lengeri & nightware", link: "", icon: "" },
          {  name: "active ware", link: "", icon: "" },
          {  name: "other clothing", link: "", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "/product-home/women/see all", icon: "" },
          { name: "heels", link: "/product-home/women/heels", icon: "" },
          { name: "oxford & loafers", link: "/product-home/women/oxford & loafers", icon: "" },
          { name: "sandals", link: "/product-home/women/sandals", icon: "" },
          { name: "flip-flops", link: "/product-home/women/flip-flops", icon: "" },
          { name: "other shoes", link: "/product-home/women/other shoes", icon: "" },
        ],
        item_2: [
          { name: "boots", link: "/product-home/women/boots", icon: "" },
          { name: "flats", link: "/product-home/women/flats", icon: "" },
          { name: "ankle boots", link: "/product-home/women/ankle boots", icon: "" },
          { name: "sports shoes", link: "/product-home/women/sports shoes", icon: "" },
          { name: "slippers", link: "/product-home/women/slippers", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "/product-home/women/see all", icon: "" },
          { name: "shoulders bags", link: "/product-home/women/shoulders bags", icon: "" },
          { name: "tote bags", link: "/product-home/women/tote bags", icon: "" },
          { name: "/purses and wallets", link: "/product-home/women/purses and wallets", icon: "" },
          { name: "stachles", link: "/product-home/women/stachles", icon: "" },
          { name: "embroided bags", link: "/product-home/women/embroided bags", icon: "" },
          { name: "luggage & suitcases", link: "/product-home/women/luggage & suitcases", icon: "" },
        ],
        item_2: [
          { name: "handbags", link: "/product-home/women/handbags", icon: "" },
          { name: "backpacks", link: "/product-home/women/backpacks", icon: "" },
          { name: "clutches", link: "/product-home/women/clutches", icon: "" },
          { name: "make-up bags", link: "/product-home/women/make-up bags", icon: "" },
          { name: "bum bags", link: "/product-home/women/bum bags", icon: "" },
          { name: "holdalls", link: "/product-home/women/holdalls", icon: "" },
          { name: "other bags", link: "/product-home/women/other bags", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "/product-home/women/see all", icon: "" },
          { name: "watches", link: "/product-home/women/watches", icon: "" },
          { name: "sunglasses", link: "/product-home/women/sunglasses", icon: "" },
          { name: "gloves", link: "/product-home/women/gloves", icon: "" },
          { name: "hair accessories", link: "/product-home/women/hair accessories", icon: "" },
          { name: "umbrellas", link: "/product-home/women/umbrellas", icon: "" },
          { name: "other accessories", link: "/product-home/women/other accessories", icon: "" },
        ],
        item_2: [
          { name: "jewellery", link: "/product-home/women/jewellery", icon: "" },
          { name: "belts", link: "/product-home/women/belts", icon: "" },
          { name: "scarfs & shawls", link: "/product-home/women/scarfs & shawls", icon: "" },
          { name: "hats & caps", link: "/product-home/women/hats & caps", icon: "" },
          { name: "tech accessories", link: "/product-home/women/tech accessories", icon: "" },
          { name: "keyrings", link: "/product-home/women/keyrings", icon: "" },
        ],
      },
      sec_5: {
        item_1: [
          { name: "see all", link: "/product-home/women/see all", icon: "" },
          { name: "perfume", link: "/product-home/women/perfume", icon: "" },
          { name: "beauty tools", link: "/product-home/women/beauty tools", icon: "" },
          { name: "nail care", link: "/product-home/women/nail care", icon: "" },
          { name: "hair care", link: "/product-home/women/hair care", icon: "" },
        ],
        item_2: [
          { name: "make-up", link: "/product-home/women/make-up", icon: "" },
          { name: "face care", link: "/product-home/women/face care", icon: "" },
          { name: "hand care", link: "/product-home/women/hand care", icon: "" },
          { name: "body care", link: "/product-home/women/body care", icon: "" },
          { name: "other beauty items", link: "/product-home/women/other beauty items", icon: "" },
        ],
      },
    },
    dropdown_2: {
      main: [
        { name: "see all",link: "/product-home/men/see all",press : "sec_0", icon: <CgMenuGridO /> },
        { name: "Clothes", link: "", press: "sec_1", icon: <GiPirateCoat /> },
        { name: "shoes", link: "", press: "sec_2", icon: <GiRunningShoe /> },
        { name: "Accessories", link: "", press: "sec_3", icon: <FiWatch /> },
        { name: "Grooming", link: "", press: "sec_4", icon: <MdStyle /> },
      ],

      sec_1: {
        item_1: [
          { name: "see all", link: "/product-home/men/see all", icon: "" },
          { name: "Coats & jackets", link: "/product-home/men/Coats-&-jackets", icon: "" },
          { name: "suits & blazers", link: "/product-home/men/suits & blazers", icon: "" },
          { name: "tops & T-Shirts", link: "/product-home/men/tops & T-Shirts", icon: "" },
          { name: "Trousers", link: "/product-home/men/Trousers", icon: "" },
          { name: "Stock & underware", link: "/product-home/men/Stock & underware", icon: "" },
          { name: "activewear", link: "/product-home/men/activewear", icon: "" },
          { name: "active ware", link: "/product-home/men/active ware", icon: "" },
          { name: "other men's clothing", link: "/product-home/men/other men's clothing", icon: "" },
        ],
        item_2: [
          { name: "jeans", link: "/product-home/men/jeans", icon: "" },
          { name: "Top & t-shirts", link: "/product-home/men/Top & t-shirts", icon: "" },
          { name: "jumpers & sweaters", link: "/product-home/men/jumpers & sweaters", icon: "" },
          { name: "shorts", link: "/product-home/men/shorts", icon: "" },
          { name: "swimwear", link: "/product-home/men/swimwear", icon: "" },
          { name: "customers & special outfits", link: "/product-home/men/customers & special outfits", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "/product-home/men/see all", icon: "" },
          { name: "sleepers & flip-flops", link: "/product-home/men/sleepers & flip-flops", icon: "" },
          { name: "convers & sneaekers", link: "/product-home/men/convers & sneaekers", icon: "" },
          { name: "sandals", link: "/product-home/men/sandals", icon: "" },
          { name: "other shoe", link: "/product-home/men/other shoe", icon: "" },
        ],
        item_2: [
          { name: "oxford and loafers", link: "/product-home/men/oxford and loafers", icon: "" },
          { name: "formal shoes", link: "/product-home/men/formal shoes", icon: "" },
          { name: "sports shoes", link: "/product-home/men/sports shoes", icon: "" },
          { name: "boots", link: "/product-home/men/boots", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "/product-home/men/see all", icon: "" },
          { name: "bags & backpacks", link: "/product-home/men/bags & backpacks", icon: "" },
          { name: "belts", link: "/product-home/men/belts", icon: "" },
          { name: "sunglasses", link: "/product-home/men/sunglasses", icon: "" },
          { name: "scarves & shawls", link: "/product-home/men/scarves & shawls", icon: "" },
          { name: "other", link: "/product-home/men/other", icon: "" },
        ],
        item_2: [
          { name: "ties & pocket squares", link: "/product-home/men/ties & pocket squares", icon: "" },
          { name: "jewellery", link: "/product-home/men/jewellery", icon: "" },
          { name: "watches", link: "/product-home/men/watches", icon: "" },
          { name: "hats & caps", link: "/product-home/men/hats & caps", icon: "" },
          { name: "gloves", link: "/product-home/men/gloves", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "/product-home/men/see all", icon: "" },
          { name: "tools & accessories", link: "/product-home/men/tools & accessories", icon: "" },
          { name: "body care", link: "/product-home/men/body care", icon: "" },
          { name: "aftershaves & colongne", link: "/product-home/men/aftershaves & colongne", icon: "" },
          { name: "grooming kits", link: "/product-home/men/grooming kits", icon: "" },
        ],
        item_2: [
          { name: "face care", link: "/product-home/men/face care", icon: "" },
          { name: "hair care", link: "/product-home/men/hair care", icon: "" },
          { name: "hand & nail care", link: "/product-home/men/hand & nail care", icon: "" },
          { name: "make up", link: "/product-home/men/make up", icon: "" },
          { name: "other grooming items", link: "/product-home/men/other grooming items", icon: "" },
        ],
      },
    },
    dropdown_3: {
      main: [
        { name: "see all", pathName : "Kids", link: "/product-home/kids/see all", press : "sec_0", icon: <CgMenuGridO /> },
        {
          press: "sec_1",
          name: "Girls's Clotheing",
          link: "",
          icon: <GiAmpleDress />,
        },
        {
          press: "sec_2",
          name: "Boy's Clotheing",
          link: "",
          icon: <GiPirateCoat />,
        },
        { press: "sec_3", name: "Toys & Games", link: "", icon: <MdToys /> },
        { press: "sec_4", name: "Baby Care", link: "", icon: <GiBabyBottle /> },
        { press: "sec_5", name: "Buggies", link: "", icon: <FaBabyCarriage /> },
        {
          press: "sec_6",
          name: "Ride-on-toys",
          link: "",
          icon: <GiTrojanHorse />,
        },
        {
          press: "sec_7",
          name: "Car Seats And Chair ",
          link: "",
          icon: <GiRockingChair />,
        },
        { press: "sec_8", name: "Kids Furniture  ", link: "", icon: <BiBed /> },
        {
          press: "sec_9",
          name: "School supplies ",
          link: "",
          icon: <GiSchoolBag />,
        },
        {
          name: "Other Kid's Items ",
          link: "",
          icon: <BsThreeDots />,
        },
      ],

      sec_1: {
        item_1: [
          { name: "see all", link: "/product-home/kids/", icon: "" },
          { name: "shoes", link: "/product-home/kids/", icon: "" },
          { name: "jumpers & hoodies", link: "/product-home/kids/", icon: "" },
          { name: "dresses", link: "/product-home/kids/", icon: "" },
          { name: "Trousers & shorts", link: "/product-home/kids/", icon: "" },
          { name: "accessories", link: "/product-home/kids/", icon: "" },
          { name: "underwear & socks", link: "/product-home/kids/", icon: "" },
          { name: "sportswear", link: "/product-home/kids/", icon: "" },
          { name: "clothing for twins", link: "/product-home/kids/", icon: "" },
          { name: "formal wear & specials occasions", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "baby clothing ", link: "/product-home/kids/", icon: "" },
          { name: "coats & jackets", link: "/product-home/kids/", icon: "" },
          { name: "tops & t-shirts", link: "/product-home/kids/", icon: "" },
          { name: "skirts", link: "/product-home/kids/", icon: "" },
          { name: "bags & backpacks", link: "/product-home/kids/", icon: "" },
          { name: "swimwear", link: "/product-home/kids/", icon: "" },
          { name: "sleepwear", link: "/product-home/kids/", icon: "" },
          { name: "clothing bundels", link: "/product-home/kids/", icon: "" },
          { name: "fancy dresess & costumes", link: "/product-home/kids/", icon: "" },
          { name: "other girls clothing", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "/product-home/kids/", icon: "" },
          { name: "shoes", link: "/product-home/kids/", icon: "" },
          { name: "jumpers & hoodies", link: "/product-home/kids/", icon: "" },
          { name: "Trousers & shorts", link: "/product-home/kids/", icon: "" },
          { name: "accessories", link: "/product-home/kids/", icon: "" },
          { name: "underwear & socks", link: "/product-home/kids/", icon: "" },
          { name: "sportswear", link: "/product-home/kids/", icon: "" },
          { name: "clothing for twins", link: "/product-home/kids/", icon: "" },
          { name: "formal wear & specials occasions", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "baby clothing ", link: "/product-home/kids/", icon: "" },
          { name: "coats & jackets", link: "/product-home/kids/", icon: "" },
          { name: "tops & t-shirts", link: "/product-home/kids/", icon: "" },
          { name: "bags & backpacks", link: "/product-home/kids/", icon: "" },
          { name: "swimwear", link: "/product-home/kids/", icon: "" },
          { name: "sleepwear", link: "/product-home/kids/", icon: "" },
          { name: "clothing bundels", link: "/product-home/kids/", icon: "" },
          { name: "fancy dresess & costumes", link: "/product-home/kids/", icon: "" },
          { name: "other girls clothing", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "/product-home/kids/", icon: "" },
          { name: "jigsaws & puzzels", link: "/product-home/kids/", icon: "" },
          { name: "gaming consoles", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "games ", link: "/product-home/kids/", icon: "" },
          { name: "toys", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "/product-home/kids/", icon: "" },
          { name: "nursing & feeding", link: "/product-home/kids/", icon: "" },
          { name: "swimming equipment", link: "/product-home/kids/", icon: "" },
          { name: "childcare & tech", link: "/product-home/kids/", icon: "" },
          { name: "bibes", link: "/product-home/kids/", icon: "" },
          { name: "childproofing & safety", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "sleep accessories ", link: "/product-home/kids/", icon: "" },
          { name: "baby carriers & wraps", link: "/product-home/kids/", icon: "" },
          { name: "nappies & skincare", link: "/product-home/kids/", icon: "" },
          { name: "bouncers & swings", link: "/product-home/kids/", icon: "" },
          { name: "potties", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_5: {
        item_1: [
          { name: "running buggies", link: "/product-home/kids/", icon: "" },
          { name: "buggies for twins", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "umbrella buggies", link: "/product-home/kids/", icon: "" },
          { name: "universal buggies", link: "/product-home/kids/", icon: "" },
          { name: "accessories for buggies", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_6: {
        item_1: [
          { name: "push & pull toys", link: "/product-home/kids/", icon: "" },
          { name: "scooters", link: "/product-home/kids/", icon: "" },
          { name: "bicycles", link: "/product-home/kids/", icon: "" },
          { name: "snowboards", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "baby walkers", link: "/product-home/kids/", icon: "" },
          { name: "kid's bike", link: "/product-home/kids/", icon: "" },
          { name: "tricycles", link: "/product-home/kids/", icon: "" },
          { name: "outdoor vehicals", link: "/product-home/kids/", icon: "" },
          { name: "roller skates & ice skates", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_7: {
        item_1: [
          { name: "push & pull toys", link: "/product-home/kids/", icon: "" },
          { name: "feeding chairs", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [{ name: "car chairs", link: "/product-home/kids/", icon: "" }],
      },
      sec_8: {
        item_1: [
          { name: "cots ", link: "/product-home/kids/", icon: "" },
          { name: "matresses", link: "/product-home/kids/", icon: "" },
          { name: "playpens", link: "/product-home/kids/", icon: "" },
          { name: "other kids furniture", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "cribes & cradles", link: "/product-home/kids/", icon: "" },
          { name: "toddler beds", link: "/product-home/kids/", icon: "" },
          { name: "playmates", link: "/product-home/kids/", icon: "" },
          { name: "changing pads & tables", link: "/product-home/kids/", icon: "" },
        ],
      },
      sec_9: {
        item_1: [
          { name: "literature for parents ", link: "/product-home/kids/", icon: "" },
          { name: "school bags", link: "/product-home/kids/", icon: "" },
        ],
        item_2: [
          { name: "children's books", link: "/product-home/kids/", icon: "" },
          { name: "school books", link: "/product-home/kids/", icon: "" },
          { name: "school supplies", link: "/product-home/kids/", icon: "" },
        ],
      },
    },
  }; 
  return (
    <div className="second_nav">
      <Tabs defaultTab={""}>
        <div className="tab-container">
          <Tab label="Women" tabIndex={1} />
          <Tab_Pan tabIndex={1}>
            <Tab_DropDown
              padding="0.8rem 0 0.8rem 1rem"
              sec2and3_padding="0.8rem 0 0.8rem 1rem"
              iconSize="1.5rem"
              items={items.dropdown_1}
            />
          </Tab_Pan>
        </div>
        <div className="tab-container">
          <Tab label="Men" tabIndex={2} />
          <Tab_Pan tabIndex={2}>
            <Tab_DropDown
              padding="0.6rem 0 0.6rem 1rem"
              sec2and3_padding="0.6rem 0 0.6rem 1rem"
              iconSize="1.3rem"
              items={items.dropdown_2}
            />
          </Tab_Pan>
        </div>
        <div className="tab-container">
          <Tab label="Kids" tabIndex={3} />
          <Tab_Pan tabIndex={3}>
            <Tab_DropDown
              sec2and3_padding="0.6rem 0 0.6rem 1rem"
              padding="0.3rem 0 0.3rem 1rem"
              iconSize="1.3rem"
              items={items.dropdown_3}
            />
          </Tab_Pan>
        </div>

        <div className="tab-container">
          <Tab label="About" tabIndex={4} />
          <Tab_Pan tabIndex={4}>
            <About_Tab />
          </Tab_Pan>
        </div>
      </Tabs>
    </div>
  );
}

export default Second_Nav;
