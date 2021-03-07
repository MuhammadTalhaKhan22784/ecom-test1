import React from 'react'



const Detail_links = ({ head }) => {
    return (
        <div className='help_detail_container'>
            <div className='main_help_detail_div'>
                <div className='help_detail_div'>
                    <h4 className='detail_head'>{head}</h4>
                    <p className='detail_para'>Your safety has always been our priority and right now it’s more important
                    than ever. Thus, we encourage you to learn more about the coronavirus
                    and how to stay safe from COVID-19 while trading on Vinted.
                      </p>
                    <h4 className='detail_head'>General safety advice</h4>
                    <p className='detail_para'>
                        Check your local government guidelines regularly to stay up-to-date with movement
                        restrictions and other safety measures. Be aware that fines or other penalties
                        may apply to people who don’t follow these guidelines.
                      </p>
                </div>
            </div>
        </div>
    )
}

export default Detail_links