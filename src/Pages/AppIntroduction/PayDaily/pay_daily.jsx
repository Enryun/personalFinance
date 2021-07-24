import React from 'react';
import screenshot1 from '../../../Image/PayDaily.png';
import screenshot2 from '../../../Image/PayDaily2.png';

const PayDaily = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Become a Finance Expert with</h1>
                <div className="pos-container">
                    <h1 className="pay-daily">Pay Daily</h1>
                    <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                        <img className="applogo" alt="AppStore" src={screenshot1}/>
                    </a>
                </div>
            
                <img src={screenshot2} alt="" className="image_1" />
            </div>
        </div>
    )
}

export default PayDaily