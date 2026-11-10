import React from 'react';
import { Link } from 'react-router-dom';
import screenshot1 from '../../../Image/DarkHorse.webp';
import screenshot2 from '../../../Image/DarkHorse2.webp';

const DarkHorse = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Learning has never been Easier</h1>
                <div className="pos-container">
                    <h1 className="pos">Dark Horse</h1>
                    <a href="https://apps.apple.com/us/app/darkhorse-flashcard-maker/id1621688582" target="_blank" rel="noopener noreferrer">
                        <img decoding="async" className="applogo" alt="AppStore" src={screenshot1}/>
                    </a>
                </div>
            
                <img decoding="async" src={screenshot2} alt="" className="image_1" />

                {/* Policy Link */}
                <div className="policy-link-container">
                    <Link to="/policy/dark-horse" className="policy-link">
                        Privacy Policy & Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DarkHorse