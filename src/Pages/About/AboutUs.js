import React from 'react'
import Footer from '../../Layout/Footer'
import AboutLogo from '../../Utills/AboutLogo'
import InvestorsCard from '../../Utills/InvestorsCard'
import TextCards from '../../Utills/TextCards'
import '../Styles/AboutUs.css'
const AboutUs = () => {
    return (
        <React.Fragment>
            <div className="about-us-main">
                <div className="abt-text mb-5">
                    <h1 className="fs-1">Don’t wear it? Sell it!</h1>
                    <p className="fs-4">We want to show you just how brilliant second-hand can be. Sell the clothes that have more to give. Shop for items you won’t find on the high street. Vinted is open to everyone who believes that good clothes should live long.</p>
                </div>
                <div className="abt-hero">
                    <img src="https://www.vinted.co.uk/assets/about/about-us-b7e8d5f0a72b77312d8c97c4b7b2c6f38bd58f2b7ca625e7d682b8fad4619966.jpg" alt="" />
                </div>
                <div className="abt-text-2">
                    <h1 className="fs-1">1 simple idea now unites a community of 37 million</h1>
                </div>
                <div className="abt-text-cards">
                    <div className="container">
                        <div className="row gy-5">
                            <TextCards />
                            <TextCards />
                            <TextCards />
                            <TextCards />
                        </div>
                    </div>
                </div>
                <div className="abt-text-2">
                    <h1 className="fs-1">Investors & Leadership</h1>
                </div>
                <div className="investors-cards">
                    <div className="container">
                        <div className="row gy-5">
                            <InvestorsCard />
                            <InvestorsCard />
                            <InvestorsCard />
                        </div>
                    </div>
                </div>
                <div className="abt-text-3">
                    <p className="fs-5">We want to show you just how brilliant second-hand can be. Sell the clothes that have more to give. Shop for items you won’t find on the high street. Vinted is open to everyone who believes that good clothes should live long.</p>
                </div>
                <div className="abt-logos">
                    <div className="container">
                        <div className="row gy-5">
                            <AboutLogo />
                            <AboutLogo />
                            <AboutLogo />
                            <AboutLogo />
                            <AboutLogo />
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        </React.Fragment>
    )
}

export default AboutUs
