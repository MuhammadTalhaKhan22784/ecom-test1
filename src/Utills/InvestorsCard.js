import React from 'react'
import './index.css'
const InvestorsCard = () => {
    return (
        <React.Fragment>
            <div className="col-md-4 col-lg-4 mx-auto">
                <div className="icard">
                    <img src="https://www.vinted.co.uk/assets/about/justas-milda-0cba330fa37d0eb1dc09ab16a926d26c78ff63040e7912e7ac6eafa7e13179f1.jpg" alt="" />
                    <div className="icard-text">
                        <h2>Cofounders</h2>
                        <p className="fs-6">Milda Mitkute & Justas Janauskas</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InvestorsCard
