import React from 'react'
import Footer from '../../Layout/Footer'
import TextCards from '../../Utills/TextCards'
import '../Styles/TrustSafety.css'
const TrustSafety = () => {
    return (
        <React.Fragment>
            <div className="trustsafety-page container-ts">
                <div className="tspagetext-1">
                    <h2 className="display-5 lh-base">We take your safety seriously</h2>
                    <p className="mt-5 fs-4 lh-base">Vinted is focused on maintaining a high standard of personal security for our members. We work proactively to create tools and policies that help our community thrive – whether you’re buying or selling. Here’s what you should know about our key safety processes.</p>
                    <h2 className="mt-5 fs-1 fw-normal lh-base">Buyer protection</h2>
                    <p className="mt-5 fs-5 lh-base">When you pay through Vinted, our Buyer Protection is mandatory for your purchase. It helps ensure safe payments, gives you the right to claim a refund and access customer support when needed. Read on to find out more.</p>
                </div>
                <div className="mt-5 abt-text-cards">
                    <div className="container">
                        <div className="row gy-5">
                            <TextCards />
                            <TextCards />
                            <TextCards />
                            <TextCards />
                        </div>
                    </div>
                </div>
                <h2 className="mt-5 fs-2">Platform security</h2>
                <div className="mt-5 abt-text-cards">
                    <div className="container">
                        <div className="row gy-5">
                            <TextCards />
                            <TextCards />
                            <TextCards />
                            <TextCards />
                        </div>
                    </div>
                </div>
                <h1 className="text-center fw-normal display-5 mt-5 lh-base ts-h1">We help build trust within our community</h1>
                <div className="tscommunity-cards">
                    <div className="tscommunity-img mt-5">
                        <img className="" src="https://www.vinted.co.uk/assets/images/safety/illustrations/communicate-d1c5c4e2be92849dd836f978571572ec04b24f24818d5de4a6ffaa98c50573a9.svg" alt="" />
                    </div>
                    <div className="tscommunity-text">
                        <h2>Communicate</h2>
                        <p className="fs-5 lh-base">Vinted’s secure messaging tool helps you find out every detail about the item you’re considering purchasing. You can message any member – just remember that you'll instantly increase their trust in you by being polite and considerate.</p>
                    </div>
                </div>
                <div className="tscommunity-cards ">
                    <div className="tscommunity-img">
                        <img src="https://www.vinted.co.uk/assets/images/safety/illustrations/communicate-d1c5c4e2be92849dd836f978571572ec04b24f24818d5de4a6ffaa98c50573a9.svg" alt="" />
                    </div>
                    <div className="tscommunity-text">
                        <h2>Communicate</h2>
                        <p className="fs-5 lh-base">Vinted’s secure messaging tool helps you find out every detail about the item you’re considering purchasing. You can message any member – just remember that you'll instantly increase their trust in you by being polite and considerate.</p>
                    </div>
                </div>
                <div className="tscommunity-cards ">
                    <div className="tscommunity-img">
                        <img src="https://www.vinted.co.uk/assets/images/safety/illustrations/communicate-d1c5c4e2be92849dd836f978571572ec04b24f24818d5de4a6ffaa98c50573a9.svg" alt="" />
                    </div>
                    <div className="tscommunity-text">
                        <h2>Communicate</h2>
                        <p className="fs-5 lh-base">Vinted’s secure messaging tool helps you find out every detail about the item you’re considering purchasing. You can message any member – just remember that you'll instantly increase their trust in you by being polite and considerate.</p>
                    </div>
                </div>
                <div className="mt-5 ts-text2">
                    <h2 className="fs-1">Good to know</h2>
                    <div className="mt-5">
                        <div className="row mx-auto">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="tips-section">
                                    <h2 className="fs-2 lh-base">Buying tips</h2>
                                    <p className="mt-4 fs-5 lh-base">Learn more about ways of evaluating if a seller can be trusted, getting extra information on items and making safe payments.</p>
                                    <a href=""><span>Learn to shop safely</span></a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="tips-section">
                                    <h2 className="fs-2 lh-base">Selling tips</h2>
                                    <p className="mt-4 fs-5 lh-base">Learn more about ways of evaluating if a seller can be trusted, getting extra information on items and making safe payments.</p>
                                    <a href=""><span>Learn to shop safely</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default TrustSafety
