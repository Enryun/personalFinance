import React from 'react';
import screenshot1 from '../../../Image/Neon.png';
import screenshot2 from '../../../Image/Neon2.png';

const NeonCloud = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Make Beautiful Banners. It's party Time!!!</h1>
                <div className="pos-container">
                    <h1 className="neon">Neon Cloud</h1>
                    <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                        <img className="applogo" alt="AppStore" src={screenshot1}/>
                    </a>
                </div>
            
                <img src={screenshot2} alt="" className="image_2" />
            </div>
        </div>
    )
}

export default NeonCloud