import React from 'react'
import {
    GiAmpleDress,
} from "react-icons/gi";
import { Link } from 'react-router-dom';
const MobViewNav = () => {
    return (
        <React.Fragment>
            <div className="mob-view-nav">
                <div className="mb-3 btm-border">
                    <h6 className="light-gray">Categories</h6>
                </div>
                <div className="d-flex align-items-center btm-border">
                    <GiAmpleDress />
                    <h6 className="ms-2">Women</h6>
                </div>
                <hr />
                <div className="d-flex align-items-center btm-border">
                    <GiAmpleDress />
                    <h6 className="ms-2">Women</h6>
                </div>
                <hr />
                <div className="d-flex align-items-center btm-border">
                    <GiAmpleDress />
                    <h6 className="ms-2">Women</h6>
                </div>
                <hr />
                <div className="mt-5 btm-border">
                    <h6>Discover</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>How it works</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Mobile apps</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Help Centre</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Infoboard</h6>
                </div>
                <hr />
                <div className="mt-5 btm-border">
                    <h6>Company</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <Link to="about-us"><h6>About us</h6></Link>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Jobs</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Press</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Advertising</h6>
                </div>
                <hr />
                <div className="mt-5 btm-border">
                    <h6>Policies</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Trust and Safety</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Privacy Policy</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Terms & Conditions</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Cookie policy</h6>
                </div>
                <hr />
                <div className="mt-5 btm-border">
                    <h6>Privacy</h6>
                </div>
                <hr />
                <div className="btm-border">
                    <h6>Cookie settings</h6>
                </div>
                <hr />
                <div className="mt-5 btm-border">
                    <h6>Community</h6>
                </div>
                <div className="mt-3 btm-border">
                    <h6>Forum</h6>
                </div>
                <hr className="mb-5" />
            </div>
        </React.Fragment>
    )
}

export default MobViewNav
