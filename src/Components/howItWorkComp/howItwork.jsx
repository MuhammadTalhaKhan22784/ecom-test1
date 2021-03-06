import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import cardImg1 from '../../assets/how-to-sell-step1.png'
import cardImg2 from '../../assets/how-to-sell-step3.png'
import cardImg3 from '../../assets/how-to-sell-step2.png'
import cardImg4 from '../../assets/shopping-step1.png'
import cardImg5 from '../../assets/shopping-step2.png'
import cardImg6 from '../../assets/shopping-step3.png'
import { MdLockOpen } from 'react-icons/md'
import { GrCurrency } from 'react-icons/gr'
// import { Footer } from 'antd/lib/layout/layout'
import Footer from '../../Layout/Footer'




const HowItWorkComp = () => {
    return (
        <div className="how_it_work_container">
            <div className="main_div_how_work">
                <div className="how_work_head_div">
                    <h1 className='main_howWork_head'>Vinted is your community for <u> pre-loved</u> fashion</h1>
                    <p>
                        37 million members, thousands of brands, and a whole lot of second-hand style.
                        You’re in the right place. Here’s how it works.
                    </p>
                </div>
                <div className='selling_simple'>
                    <h3 className='main_head_cards'>Selling is simple</h3>
                    <div className='selling_simple_cards_div'>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg1} alt="" />
                            <h3 className='selling_card_head'>1. List for free</h3>
                            <p className='selling_card_para'>
                                Download the free Vinted app. Take photos of your item,
                                describe it, and set your price. Tap “Upload” and your listing is live.
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg2} alt="" />
                            <h3 className='selling_card_head'>2. Sell it, ship it</h3>
                            <p className='selling_card_para'>
                                Sold! Box your item, follow the shipping instructions, and make sure you send
                                the item within 5 days.
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg3} alt="" />
                            <h3 className='selling_card_head'>3. It’s payday!</h3>
                            <p className='selling_card_para'>
                                There are zero selling fees, so what you earn is yours to keep. You’ll
                                be paid as soon as the buyer confirms everything’s OK.
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>

                    </div>
                    <div className='btn_div'>
                        <button className='start_selling_btn'>Start selling</button>
                    </div>
                </div>

                <div className='selling_simple'>
                    <h3 className='main_head_cards'>Shop safely and securely</h3>
                    <div className='selling_simple_cards_div'>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg4} alt="" />
                            <h3 className='selling_card_head'>1. Find it</h3>
                            <p className='selling_card_para'>
                                Download the free Vinted app. Browse millions of unique items
                                , search thousands of brands, and find your favourites
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg5} alt="" />
                            <h3 className='selling_card_head'>2. Buy it</h3>
                            <p className='selling_card_para'>
                                Ask the seller any questions, then buy with the tap of a button.
                                Pay securely via PayPal, bank card, or your Vinted Wallet.
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>
                        <div className='selling_simple_cards'>
                            <img className='selling_card_img' src={cardImg6} alt="" />
                            <h3 className='selling_card_head'>3. Get it</h3>
                            <p className='selling_card_para'>
                                You’ll see your item’s estimated delivery date at checkout, and we’ll let
                                you know when it’s in the post. In a few days, it’ll be with you.
                          </p>
                            <Link className='selling_card_link'>learn more</Link>
                        </div>

                    </div>
                    <div className='btn_div'>
                        <button className='start_selling_btn'>Start shopping</button>
                    </div>
                </div>


                <div className='selling_simple'>
                    <h3 className='main_head_cards'>You’re safe with us</h3>
                    <div className='selling_simple_cards_div'>
                        <div className='selling_simple_cards_two'>
                            {/* <img className='selling_card_img' src={cardImg4} alt=""/> */}
                            <div>

                                <MdLockOpen className='icons_how_work' />
                            </div>
                            <div className='detail_cards'>

                                <h3 className='selling_card_head'>Shop with peace of mind</h3>
                                <p className='selling_card_para2'>
                                As a buyer, you can choose to pay a buyer-protection fee.
                                 This helps safeguard your money, adding an extra layer of 
                                 protection to your purchases and keeping your information secure.
                                  The cost is 3–8% of the item price (excluding shipping and taxes)
                                   plus $0.30–0.80.
                          </p>
                                <Link className='selling_card_link'>learn more</Link>
                            </div>
                        </div>
                        <div className='selling_simple_cards_two'>
                            {/* <img className='selling_card_img' src={cardImg5} alt=""/> */}
                            <div>

                                <GrCurrency className='icons_how_work' />
                            </div>
                            <div className='detail_cards'>

                                <h3 className='selling_card_head'>Reliable refund policy</h3>
                                <p className='selling_card_para2'>
                                Your order is protected when you pay through Vinted. You’ll get a refund 
                                if your item isn’t sent, was damaged in transit, or is significantly not
                                 as described. Let us know within 2 days of delivery if something isn’t 
                                 right. Unless otherwise agreed, the buyer covers the return cost.
                          </p>
                                <Link className='selling_card_link'>learn more</Link>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='ready_to_go_div'>
                     <h1>Ready To Go?</h1>
                     <button className='shoping_btn'>Start Shopping</button>
                     <button className='selling_btn'>Start Selling</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default HowItWorkComp