import React from 'react';
import screenshot1 from '../../../Image/DarkHorse.png';
import screenshot2 from '../../../Image/DarkHorse2.png';

const DarkHorse = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Learning has never been Easier</h1>
                <div className="pos-container">
                    <h1 className="pos">Dark Horse</h1>
                    <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                        <img className="applogo" alt="AppStore" src={screenshot1}/>
                    </a>
                </div>
            
                <img src={screenshot2} alt="" className="image_1" />
            </div>
        </div>
    )
}

export default DarkHorse