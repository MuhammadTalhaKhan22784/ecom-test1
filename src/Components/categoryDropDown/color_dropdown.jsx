import React from 'react'
import black from '../../assets/black.jpg'
import './style.css'



const ColorDropDown = ({ openColor}) => {


    return (
        <div className='dropDown_menucolor_container'>
            <div>

                {openColor ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                        <li>
                                <p className='icon_name'><img className='clr' src={black} alt=""/> All</p>
                                {/* <p className='more_icon'>{'>'}</p> */}
                                <input className='checkBox' type="checkbox" defaultChecked name="" id="" />
                            </li>
                            
                        </ul>
                    </div>
                    :
                    null
                }
                
            </div>
        </div>
    )
}

export default ColorDropDown