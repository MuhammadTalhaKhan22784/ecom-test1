import React from 'react'
import './style.css'



const BrandDropDown = ({ openBrand}) => {


    return (
        <div className='dropDown_menuBrand_container'>
            <div>

                {openBrand ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                        <li>
                                <p className='icon_name'> Nike</p>
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

export default BrandDropDown