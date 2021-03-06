import React from 'react'
import './style.css'
import googlePlay from '../../assets/google play.png'
import appStore from '../../assets/app store.png'
import Mobileimg from '../../assets/apps.png'
import Footer from '../../Layout/Footer'


const GetApp = () => {
    return(
        <div className='app_page_container'>
            <div className='main_app_div'>
                <div className='mob_para_div'>
                   <p className='mobHead'>Vinted in your pocket</p>
                   <p className='mob_para'>Join the world's biggest pre-loved fashion marketplace.
                        Sell and shop second-hand from anywhere with the free Vinted app.</p>
                        <img className='storeImg' src={appStore} alt=""/>
                        <img className='storeImg2' src={googlePlay} alt=""/>
                </div>
                <div>
                    <img className='mob_img' src={Mobileimg} alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GetApp