import React from 'react';
import { Link } from 'react-router-dom';
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

                {/* Policy Link */}
                <div className="policy-link-container">
                    <Link to="/policy/neon-cloud" className="policy-link">
                        Privacy Policy & Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NeonCloud