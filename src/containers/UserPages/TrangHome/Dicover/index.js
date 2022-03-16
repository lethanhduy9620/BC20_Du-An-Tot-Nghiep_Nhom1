import React from 'react'
import "./style.css"; 
export default function Discover() {
  return (
    <div className='container'>
        <h3 className='pt-3'>Discover Airbnb Experiences</h3>
        <div className='row' id='discover-row'>
            <div style={{backgroundImage:'url(./img/Trip.png)'}} className='col-sm-5 discover'>
                <div className='discover-content'>
                <h1>Thing to do <br/> on your trip</h1>
                <button>Experiences</button>
                </div>
            </div>    
            <div style={{backgroundImage:'url(./img/Home.png)'}} className='col-sm-5 discover'>
                <div className='discover-content'>
                <h1>Thing to do<br/> from home</h1>
                <button>Online Experiences</button>
                </div>
            </div>
        </div>
    </div>
  )
}
