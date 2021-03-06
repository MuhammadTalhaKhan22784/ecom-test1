import React from 'react'
import './style.css'



const ConditionDropDown = ({ openCondition}) => {


    return (
        <div className='dropDown_menuCondition_container'>
            <div>

                {openCondition ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                        <li>
                                <p className='icon_name'> very good</p>
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

export default ConditionDropDown