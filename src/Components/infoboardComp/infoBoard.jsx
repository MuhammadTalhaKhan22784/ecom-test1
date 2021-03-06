import React from 'react'
import './style.css'
import img1 from '../../assets/Donation_infoboard.png'
import { Link } from 'react-router-dom'
import img2 from '../../assets/NL_infoboard.png'
import img3 from '../../assets/shipping_infoboard.png'



const InfoBoardComp = () => {
    return (
        <div className='infoboard_container'>
            <div className='main_infoboard_div'>
                <div className="shipping_div">
                    <h1 className="shipping_head">Shipping timelines within the US are no longer extended</h1>
                    <p className='date_infoboard'>20 march 2020</p>
                    <img className='img1_infoboard' src={img1} alt="" />
                    <p className='shipping_info_para1'>Our integrated local shipping provider is returning to full service
                    in the United States. Shipping and order-confirmation deadlines
                       are no longer extended.</p>
                    <h3 className="shipping_head2">Ship items using the USPS</h3>
                    <div>
                        <p className='shipping_para2'><strong> The USPS is available for sending Vinted parcels within the United
                               States.</strong> For more information on available shipping options,
                                see our <Link className='shipping_link' > Price List.</Link>
                        </p>
                        <p className='shipping_para2'>
                            The USPS has put safety measures in place
                            to help protect the health of customers and employees:
                        </p>
                        <p className='shipping_para2'>
                            <p>

                                • You’ll have to keep at least 6 feet distance when in line and the number of
                                people allowed inside the post office may be limited to ensure proper distancing.
                            </p>
                            <p >
                                • You’ll need to present a valid photo ID when picking up a parcel
                                as usual, but you won’t need to sign anything.
                        </p>
                        </p>
                        <p className='shipping_para2'>
                            Always remember to follow safety guidelines and comply with
                         your <Link className='shipping_link'> local government regulations.</Link> Prioritize your health
                         and the health of those around you. Visit our dedicated <Link className='shipping_link'>
                                COVID-19</Link>
                         Help Center page to learn more.
                        </p>
                        <h3 className="shipping_head2">
                            Updated shipping and order-confirmation deadlines
                        </h3>
                        <p className='shipping_para2'>
                            As a result of the USPS moving from delayed to full service,
                            deadlines are resuming and we’re moving back to our usual
                         <Link className='shipping_link'> terms and conditions </Link>. Here are the live shipping and
                          order-confirmation deadlines:
                        </p>
                        <p className='shipping_para2'>
                            <p>

                                • Sellers have <Link className='shipping_link'> 5 working days</Link> to ship an item after it’s sold
                            </p>
                            <p>
                                • Buyers have <Link className='shipping_link'> 2 days</Link> after receiving an item to mark
                                 “Everything’s OK” or “I have an issue”
                        </p>
                        </p>
                        <p className='shipping_para2'>
                            <strong> These deadlines apply to all orders from today onwards.</strong>
                         If you have an order in progress, you will have 5 working
                         days from today to ship the item (regardless of when the order was placed).
                          If you recently received an item, you will have 2 days from today
                           to confirm that everything’s OK.
                        </p>
                        <p className='shipping_para2'>
                            <strong> Please make sure you complete these actions within the updated
                         deadlines.</strong> As usual, orders that aren’t shipped within the
                         deadline will cancel automatically.
                        </p>
                        <h3 className="shipping_head2">Sell and buy within the US now</h3>
                        <p className='shipping_para2'>
                            Take advantage of local shipping! Upload, sell, and buy items to your heart’s content.
                        </p>

                    </div>
                </div>

            </div>
            <div className='main_infoboard_div'>
                <h1 className="shipping_head">
                    Advice for your health, safety, and wellbeing
                </h1>
                <p className='date_infoboard'>20 march 2020</p>
                <img className='img1_infoboard' src={img2} alt="" />
                <h3 className="shipping_head2">Trade with care</h3>
                <p className='shipping_para2'>
                    Check your local <Link className='shipping_link'> government guidelines</Link> and shipping provider
                advice regularly to see if it’s safe to ship or collect items.
                 Be aware that there may be fines or other penalties for people
                 who don’t follow these guidelines. If you’d prefer to pause trading
                  for now, you can switch on <Link className='shipping_link'>holiday mode.</Link>
                </p>
                <h3 className="shipping_head2">Combine trips</h3>
                <p className='shipping_para2'>
                    If your local government guidelines allow you to ship items,
                    then please combine going to the pick-up/drop-off point with
                    a necessary trip (e.g. food shopping or going to the pharmacy).
                    In general, avoid multiple trips out of the house and always follow
                    your local government guidelines on movement.
                </p>
                <h3 className="shipping_head2">Practise social distancing</h3>
                <p className='shipping_para2'>
                    If you leave the house for any reason – including to drop off or
                    pick up parcels – make sure you stay at least 6ft away from other
                    people. Don’t leave the house if you’re feeling unwell. Take extra
                    care if you live with someone in a high-risk group.
                </p>
                <h3 className="shipping_head2">Wash your items</h3>
                <p className='shipping_para2'>
                    As usual, if you’re selling second-hand items always wash them before
                    sending them. If you’ve bought an item, wash it after you receive it.
                </p>
                <h3 className="shipping_head2">Stay active</h3>
                <p className='shipping_para2'>

                    Vinted is still open for you. If you’re stuck at home,
                    make use of your time and get decluttering! You can chat,
                 list, save favourites, and <Link className='shipping_link'> reserve items.</Link> As always,
                  it’s a good idea to stay in touch with your buyers to
                   let them know what’s happening with their orders.
                </p>
                <h3 className="shipping_head2">Remember hygiene</h3>
                <p className='shipping_para2'>
                    Wash your hands regularly and thoroughly for at least 20 seconds.
                    Avoid touching your eyes, nose, and mouth. Cover your mouth and
                    nose with a tissue when coughing or sneezing, and throw the tissue
                    away immediately and wash your hands straight away afterwards. If
                    you don’t have a tissue to hand, you can use your upper sleeve or
                    the inside of your elbow (not your hands).
                </p>
                <h3 className="shipping_head2">Share facts, not fiction</h3>
                <p className='shipping_para2'>
                    Check the sources of information you get online,
                    through social media, or from family and friends.
                    Please don’t share medical misinformation via messages or
                forum posts (see <Link className='shipping_link'>our forum rules here</Link>  ). Keep up-to-date with the
                 facts via public health authorities like the <Link className='shipping_link'> World
                 Health Organization.</Link>
                </p>
                <h3 className="shipping_head2">Look after yourself and others</h3>
                <p className='shipping_para2'>
                    If you catch yourself feeling stressed or anxious,
                    consider taking a break from the news and social media.
                    Prioritise your health and the health of your community
                 by following <Link className='shipping_link'> local government</Link> guidelines
                 and <Link className='shipping_link'> international recommendations.</Link>
                </p>
                <h3 className="shipping_head2">Stay connected</h3>
                <p className='shipping_para2'>
                    In these times, it’s vital to connect with your community.
                    Look out for your neighbours from afar, and check in with
                    family and friends via calls and messages. We’re in this together.
                </p>
                <p className='shipping_para2'>
                    <strong> Please note:</strong> We highly recommend that you don’t buy items outside our
                payment system. These transactions are not secure because they
                require you to exchange personal information, which can result in
                 scams or fraud. Please don’t meet to exchange items and/or payment
                  in person during movement restrictions.
                </p>
                <p className='shipping_para2'>
                    For more information on the current situation and how it impacts your
                Vinted experience, please visit the <Link className='shipping_link'> Help Centre.</Link>
                </p>

            </div>
            <div className='main_infoboard_div'>
                <h1 className="shipping_head">

                    Shipping services may be disrupted
                </h1>
                <p className='date_infoboard'>20 march 2020</p>
                <img className='img1_infoboard' src={img3} alt="" />
                <p className='shipping_info_para1'>
                    Please be aware that recent events may impact the availability
                    of pick-up and drop-off points in the USA. This may also
                    affect your current orders.
                </p>
                <p className='shipping_para2'>
                    We’re working closely with our shipping partners to find solutions
                    as quickly as possible. We’ll let you know as soon as we have more
                information. If you have any questions, you can contact us <Link className='shipping_link'> here.</Link>
                </p>
                <p className='shipping_para2'>
                    For more detailed information on shipping service availability,
                    you can also check the website of your selected shipping provider.
                </p>
            </div>
            <div className='main_infoboard_div'>
                <h1 className="shipping_head">

                    We’ve removed the item comments section
                </h1>
                <p className='date_infoboard'>20 march 2020</p>
                <p className='shipping_para2'>
                    Today we removed the comments section from item listings,
                    because most of our members weren’t using it.
                </p>
                <p className='shipping_para2'>
                    If you want to know more about a specific item, tap the
                    'Message Seller' button in a listing to start a private
                    message conversation—just like you normally do.
                </p>
                <p className='shipping_para2'>
                    You can still ask as many questions as you like, and now the
                    comments section is gone there’s more space on your screen for
                    images and other useful information.
                </p>
            </div>
            <div className='main_infoboard_div'>
                <h1 className="shipping_head">

                    An update to our Cosmetics Policy
                </h1>
                <p className='date_infoboard'>20 march 2020</p>
                <p className='shipping_para2'>
                    To increase the safety of everyone on Vinted, we will no longer
                    allow the sale of certain cosmetics, perfume, or beauty supplies
                    which could potentially be harmful to our members’ health.
                </p>
                <p className='shipping_para2'>
                    Following this change, the sale of all cosmetics, perfume, and beauty supplies
                    that are not in their original sealed packaging will no longer be allowed on Vinted.
                </p>
                <p className='shipping_para2'>
                    We therefore ask you not to list perfume, makeup, creams, lotions,
                    and hair-care products that have already been used and that are
                    not in their original sealed packaging.
                </p>
                <p className='shipping_para2'>
                    Makeup sponges, cosmetic brushes, and used applicators in opened
                    original packaging can’t be sold, either—even if they’ve had no
                    contact with the skin.
                </p>
                <p className='shipping_para2'>
                    Note that cosmetics, perfume, and beauty supplies that have been
                    only used once also fall under this rule.
                </p>
                <p className='shipping_para2'>
                    For more information concerning these changes, please see our <Link className='shipping_link'>
                        Catalog Rules</Link>
                 and <Link className='shipping_link'> FAQ.</Link>
                </p>
            </div>
        </div>
    )
}

export default InfoBoardComp