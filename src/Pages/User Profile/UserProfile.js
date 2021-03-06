import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import '../Styles/UserProfile.css'
const UserProfile = () => {
    return (
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
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
            <div className="userproducts">

            </div>
        </div>
    )
}

export default UserProfile
