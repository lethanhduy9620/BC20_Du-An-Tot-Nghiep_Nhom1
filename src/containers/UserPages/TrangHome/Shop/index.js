import React from 'react'
import "./style.css"
export default function Shop() {
  return (
    <div className='container pt-5'>
        <div className='row'>
            <div className='col-sm-4 '>
                <h3>Shop Airbnb gift cards</h3>
                <button className='btn btn-success'>Learn More</button>
            </div>
            <div style={{backgroundImage:'url(./img/image3.png)'}} className='col-sm-8 shop-bg'>

            </div>
        </div>
    </div>
  )
}
