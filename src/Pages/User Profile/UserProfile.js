import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdWifi } from 'react-icons/io';

import '../Styles/UserProfile.css'
import SortByDropDown from '../../Components/categoryDropDown/SortByDropDown';
import Product from '../../Components/Product';
const UserProfile = () => {
    const [active,setActive] = useState("home")
    return (
        <React.Fragment>
            <div className="user-profile">
                <div className="userinfo-card">
                    <div className="user-img-card">
                        <img src="https://images.vinted.net/thumbs/f800/02_01891_x9CBn8QM3ww6geiAAu2TCLut.jpeg?1604415919-b9b5b6135b7aef980f7c2325ab7a3309870b6d84" alt="" />
                    </div>
                    <div className="user-info">
                        <h2 className="fs-4">jessierrae3</h2>
                        <BsThreeDots />
                    </div>
                    <div className="user-views">
                        <div className="user-star">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <span>544 reviews</span>
                        <AiOutlineRight />
                    </div>
                    <div className="user-social">
                        <span>Verified info</span>
                        <div className="us-links">
                            <AiOutlineCheckCircle />
                            <span>Facebook</span>
                        </div>
                        <div className="us-links">
                            <AiOutlineCheckCircle />
                            <span>Email</span>
                        </div>
                    </div>
                    <div className="user-address">
                        <div className="us-links">
                            <AiOutlineCheckCircle />
                            <span>San Antonio, TX, United States</span>
                        </div>
                        <div className="us-links">
                            <AiOutlineCheckCircle />
                            <span>Last seen9 hours ago</span>
                        </div>
                        <div className="us-links">
                            <AiOutlineCheckCircle />
                            <span><strong>761</strong> followers, <strong>159</strong> following</span>
                        </div>
                    </div>
                    <div className="user-btns">
                        <button className="msg-btn">Message</button>
                        <button className="follow-btn">Follow</button>
                    </div>
                </div>
                <div className="userproducts">
                    <div className="shop-bundles">
                        <h2 className="fs-6">Shop bundles!</h2>
                        <div className="get-upto">
                            <span className="fs-6">Get up to 20% off</span>
                            <AiOutlineRight />
                        </div>
                    </div>
                    <div className="prd-categories">
                        <span>90 items</span>
                        <div className="d-flex">
                            <SortByDropDown sortName="Category" />
                            <SortByDropDown sortName="Sort by" />
                        </div>
                    </div>
                    <div className="products-cards">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>

            <div className="mbview-user-profile">
                <div className="userprofile-tabs">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className={`nav-item profile-navs ${active === "home" && "active"}`} role="presentation">
                            <button onClick={()=> setActive("home")} className="nav-link profile-nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                        </li>
                        <li className={`nav-item profile-navs ${active === "profile" && "active"}`} role="presentation">
                            <button onClick={()=> setActive("profile")} className="nav-link profile-nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="mbview-user-info">
                                <div className="mbview-userpic">
                                    <FaUserCircle />
                                </div>
                                <div className="w-100">
                                    <div className="user-info">
                                        <h2 className="fs-4">jessierrae3</h2>
                                    </div>
                                    <div className="user-views">
                                        <div className="user-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <span className="ms-3">544 reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <AiOutlineRight />

                            </div>
                            <div className="user-social">
                                <div className="us-links">
                                    <AiOutlineCheckCircle />
                                    <span>Facebook, Email</span>
                                </div>
                                <div className="us-links">
                                    <IoLocationOutline />
                                    <span>Facebook, Email</span>
                                </div>
                                <div className="us-links">
                                    <IoMdWifi />
                                    <span><strong>761</strong> followers, <strong>159</strong> following</span>
                                </div>
                            </div>
                            <div className="user-btns">
                                <button className="msg-btn">Message</button>
                                <button className="follow-btn">Follow</button>
                            </div>
                            <div className="shop-bundles">
                                <h2 className="fs-6">Shop bundles!</h2>
                                <div className="get-upto">
                                    <span className="fs-6">Get up to 20% off</span>
                                    <AiOutlineRight />
                                </div>
                            </div>
                            <div className="prd-categories">
                                <span>90 items</span>
                                <div className="d-flex">
                                    <SortByDropDown sortName="Category" />
                                    <SortByDropDown sortName="Sort by" />
                                </div>
                            </div>
                            <div className="products-cards">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="mbview-userabout">

                                <div className="user-img-card">
                                    <img src="https://images.vinted.net/thumbs/f800/02_01891_x9CBn8QM3ww6geiAAu2TCLut.jpeg?1604415919-b9b5b6135b7aef980f7c2325ab7a3309870b6d84" alt="" />
                                </div>
                                <div className="mbview-about">
                                    <div className="user-info">
                                        <h2 className="fs-4">jessierrae3</h2>
                                        <BsThreeDots />
                                    </div>
                                    <div className="user-views">
                                        <div className="user-star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <span>544 reviews</span>
                                        <AiOutlineRight />
                                    </div>
                                    <div className="user-social">
                                        <span>Verified info</span>
                                        <div className="us-links">
                                            <AiOutlineCheckCircle />
                                            <span>Facebook</span>
                                        </div>
                                        <div className="us-links">
                                            <AiOutlineCheckCircle />
                                            <span>Email</span>
                                        </div>
                                    </div>
                                    <div className="user-address">
                                        <div className="us-links">
                                            <AiOutlineCheckCircle />
                                            <span>San Antonio, TX, United States</span>
                                        </div>
                                        <div className="us-links">
                                            <AiOutlineCheckCircle />
                                            <span>Last seen9 hours ago</span>
                                        </div>
                                        <div className="us-links">
                                            <AiOutlineCheckCircle />
                                            <span><strong>761</strong> followers, <strong>159</strong> following</span>
                                        </div>
                                    </div>
                                    <div className="user-btns">
                                        <button className="msg-btn">Message</button>
                                        <button className="follow-btn">Follow</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile
