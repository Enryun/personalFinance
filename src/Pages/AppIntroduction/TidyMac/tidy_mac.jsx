import React from 'react';
import { Link } from 'react-router-dom';
import screenshot1 from '../../../Image/TidyMac.png';
import screenshot2 from '../../../Image/TidyMac2.png';
import './tidy_mac.scss';

const TidyMac = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Keep Your Mac Clean with</h1>
                <div className="pos-container">
                    <h1 className="tidy-mac">Tidy Mac</h1>
                    <a href="https://apps.apple.com/us/app/tidy-mac/id1234567890" target="_blank" rel="noopener noreferrer">
                        <img className="applogo" alt="Mac App Store" src={screenshot1}/>
                    </a>
                </div>
            
                <img src={screenshot2} alt="Tidy Mac Screenshot" className="image_1" />
                
                {/* Policy Link */}
                <div className="policy-link-container">
                    <Link to="/policy/tidy-mac" className="policy-link">
                        Privacy Policy & Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TidyMac; 