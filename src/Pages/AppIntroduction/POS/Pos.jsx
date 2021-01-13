import React from 'react'
import screenshot1 from '../../../Image/POS1.png';
import screenshot2 from '../../../Image/POS2.png';
import screenshot3 from '../../../Image/POS3.png';
import screenshot4 from '../../../Image/POS4.png';
import './POS.scss'
import appstore from '../../../Image/appStore.png';


const Pos = () => {
    return (
        <div>
            <h1 className="big-title">Transform your Ipad</h1>
            <img src={screenshot1} alt="" className="image_1" />

            <div className="pos_block">
                <h2 className="small-title">Easy to Use</h2>
                <div class="gradient-border" id="box">
                    <img src={screenshot3} alt="" className="other_image" />

                </div>
            </div>
            <div className="pos_block">
                <div class="gradient-border" id="box">
                    <img src={screenshot2} alt="" className="other_image" />
                </div>
                
                <h2 className="small-title">Simple Solution for Small Business</h2>
            </div>
            <div className="pos_block">
                <h2 className="small-title">Compatible with POS Printer and Cash Drawer</h2>
                <div class="gradient-border" id="box">
                    <img src={screenshot4} alt="" className="other_image" />
                </div>   
            </div>
            
            <div className="pos-foot">
                <h3>Free to Try. Get it Now!</h3>
                <a href="https://apps.apple.com/app/id1529449644?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                    <img className="appstore" alt="AppStore" src={appstore}/>
                </a>
            </div>
            
        </div>
    )
}

export default Pos