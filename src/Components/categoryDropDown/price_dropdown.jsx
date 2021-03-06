import React from 'react'
import './style.css'



const PriceDropDown = ({ openPrice}) => {


    return (
        <div className='dropDown_menuPrice_container'>
            <div>

                {openPrice ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_price_ul'>
                        <li>
                                
                                <input className='inputF' placeholder='from' type='text'  />
                                <input className='inputF' placeholder='to' type="text"  />
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

export default PriceDropDown