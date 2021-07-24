import React from 'react'
import screenshot1 from '../../../Image/POS1.png';
import screenshot2 from '../../../Image/POS2.webp';
import screenshot3 from '../../../Image/POS3.webp';
import screenshot4 from '../../../Image/POS4.webp';
import './POS.scss'
import appstore from '../../../Image/appStore.png';
import {Link} from 'react-router-dom';
import logo from '../../../Image/POS_Logo.png';



const Pos = () => {
    return (
        <div>
            <div className="big-background">
                <h1>Transform your Ipad with</h1>
                <div className="pos-container">
                    <h1 className="pos">UCoffee</h1>
                    <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                        <img className="applogo" alt="AppStore" src={logo}/>
                    </a>
                </div>
            
                <img src={screenshot1} alt="" className="image_1" />
            </div>
            
            <div className="pos_block">
                <h2>Easy to Use and <Link className="link" to='/ucoffee-setup'>Set Up</Link></h2>
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
                <h3>Already Downloaded. Go to <Link to='/ucoffee-setup' className="link">Set Up</Link></h3>
            </div>
            
        </div>
    )
}

export default Pos