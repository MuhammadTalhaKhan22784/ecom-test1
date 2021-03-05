import React from 'react'
import subheader from "../assets/subheader.jpeg";
import Product from '../Components/Product'
import './Styles/Home.css'
const Home = () => {
    return (
        <React.Fragment>
            <div className="subheader">
                <img src={subheader} alt="Vinted-Subheader" />
                <div className="mb-view-form">
                    <p>Ready to declutter your wardrobe?</p>
                </div>
            </div>

            <div className="pd-main d-flex flex-wrap">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                
            </div>
            {/* 
      <Link to="/offer">
        <Product />
      </Link> */}
        </React.Fragment>
    )
}

export default Home;
