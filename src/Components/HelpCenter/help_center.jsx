import React from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'
import {HiOutlineFlag,HiOutlineUserGroup} from 'react-icons/hi'
import {VscTag} from 'react-icons/vsc'
import{RiTShirtAirFill} from 'react-icons/ri'
import {FaShippingFast} from 'react-icons/fa'
import {GrCurrency,GrUserSettings} from 'react-icons/gr'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {MdLockOpen} from 'react-icons/md'


const HelpCenter = () => {
    return (
        <div>
            <div className='main_help_center_div'>
                <div className='helpcenter_list_div'>
                    <p className='helpcenter_head'>Help Center</p>
                    <ul className='helpcenter_ul'>
                        <li>Home</li>
                        <li>Covid 19</li>
                        <li>Selling</li>
                        <li>Buying</li>
                        <li>Shipping</li>
                        <li>Payments & Payouts</li>
                        <li>Safety & Reporting</li>
                        <li>My account & Settings</li>
                        <li>Community</li>
                        <li>Not Logged In</li>
                    </ul>
                </div>
                <div className='helpcenter_search_table_div'>
                    <div className='help_search_div'>
                        <div>

                            <input type="text" placeholder='Search by keywords' name="" id="" />
                            <BsSearch />
                        </div>
                    </div>
                    <div className='helpcenter_table_div'>
                        <p className='topic_head'>General Topics</p>
                        <div className='table_div_helpcenter'>
                            <div>
                                <HiOutlineFlag className='help_center_icon' />
                               <p> Covid 19</p>
                            </div>
                            <div>
                                <VscTag className='help_center_icon'/>
                                <p> Selling</p>
                            </div>
                            <div>
                                <RiTShirtAirFill className='help_center_icon'/>
                               <p> Buying</p>
                            </div>
                            <div>
                                <FaShippingFast className='help_center_icon' />
                               <p> Shipping</p>
                            </div>
                            <div>
                                <GrCurrency className='help_center_icon' />
                               <p> Payments & Payouts</p>
                            </div>
                            <div>
                                <AiOutlineSafetyCertificate className='help_center_icon' />
                               <p> Safety & Reporting</p>
                            </div>
                            <div>
                                <GrUserSettings className='help_center_icon' />

                               <p> My account & Settings</p>
                            </div>
                            <div>
                                <HiOutlineUserGroup className='help_center_icon' />
                                <p> Community</p>
                            </div>
                            <div>
                                <MdLockOpen className='help_center_icon' />
                               <p> Not Logged In</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter