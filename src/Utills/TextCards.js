import React from 'react'
import './index.css'
const TextCards = () => {
    return (
        <React.Fragment>
            <div className="col-md-6 col-lg-6">
                <div className="text-card">
                    <div className="tcard-img">
                        <img src="https://www.vinted.co.uk/assets/icons/new/bulb-07f2294557c67266d9d48ddc2102d7c4797f49c2c6262c74c1c916190a5316d4.svg" alt="" />
                    </div>
                    <div className="tcard-text">
                        <h2 className="fs-2">From 2 people</h2>
                        <p className="fs-5">In 2008, Milda was moving house, but had too many clothes to take with her. Justas offered help and built a website to give away her clothes to friends. Soon enough, the media wanted in, too. The duo knew they were on to something – Vinted was born.</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TextCards
