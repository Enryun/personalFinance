import React from 'react';
import logo from '../../../Image/financeLogo.png';
import './FinanceAdvisor.scss';
import appstore from '../../../Image/appStore.png';
import screenshot1 from '../../../Image/finance1_iphonexspacegrey_portrait.png';
import screenshot2 from '../../../Image/finance2.png';
import screenshot3 from '../../../Image/finance3_iphonexspacegrey_portrait.png';
import screenshot6 from '../../../Image/finance6_iphonexspacegrey_portrait.png';
import screenshot8 from '../../../Image/finance8_iphonexspacegrey_portrait.png';


const FinanceAdvisor = () => {
    return (
        <div className="container">
            <h2 className="title_fi">More than a Calculator</h2>
            <img className="screenshot_fi" alt="screen shot" src={screenshot3} />
            <h3 className="reveal">3 Fundamental Valuation Models</h3>
            <h3>Easily computing Present Value and Future Value</h3>
            <img className="screenshot_fi" alt="screen shot" src={screenshot6} />
            <h3>Detail Loan Table</h3>
            <img className="screenshot_fi" alt="screen shot" src={screenshot8} />
            <img className="screenshot_fi" alt="screen shot" src={screenshot1} />

            <img className="screenshot_fi" alt="screen shot" src={screenshot2} />

            <h3>Learn more knowledge on Finance Field</h3>
            <h3>Advailable on Iphone and Ipad</h3>
            <h3 className="seperation">Finance Advisor</h3>

            <div className="end-container">
                <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                    <img className="appstore_fi" alt="AppStore" src={appstore}/>
                    <img className="applogo" alt="logo" src={logo} />
                </a>
            </div>
          
        </div>
    )
}

export default FinanceAdvisor