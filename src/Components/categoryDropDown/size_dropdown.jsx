import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { TiThSmall } from 'react-icons/ti'
import './style.css'



const SizeDropDown = ({ opensize ,handleName,valueSize,handleBackSize,sizeStepTow}) => {


    return (
        <div className='dropDown_menusize_container'>
            <div>

                {opensize ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                            <li onClick={() => handleName('women')}>
                                <p className='icon_name'> Women</p>
                                <p className='more_icon'>{'>'}</p>
                            </li>
                            <li onClick={() => handleName('men')}>
                                <p className='icon_name'> Men</p>
                                <p className='more_icon'>{'>'}</p>
                            </li>
                            
                        </ul>
                    </div>
                    :
                    null
                }
                {sizeStepTow ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                            <li onClick={handleBackSize}>
                                <p className='back'><BiArrowBack className='back_icon' /></p>
                                <p className='title_drop_down'>{valueSize}</p>
                            </li>
                            {valueSize === 'women' ?
                                <>
                                    <li>
                                <p className='icon_name'><TiThSmall className='menu_icons' /> All</p>
                                <input className='checkBox' type="checkbox" defaultChecked name="" id="" />
                            </li>
                                </>
                                :  
                                    <>
                                        <li>
                                <p className='icon_name'><TiThSmall className='menu_icons' /> All</p>
                                <input className='checkBox' type="checkbox" defaultChecked name="" id="" />
                            </li>
                                    </>
                            }
                        </ul>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default SizeDropDown