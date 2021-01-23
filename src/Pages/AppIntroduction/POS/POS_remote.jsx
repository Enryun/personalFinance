import React from 'react'
import {Link} from 'react-router-dom'
import screenshot1 from '../../../Image/POS23.webp'
import screenshot2 from '../../../Image/POS27.webp'
import screenshot3 from '../../../Image/POS25.webp'
import logo from '../../../Image/POS_remote_logo.webp'
import appstore from '../../../Image/appStore.png';



const POS_remote = () => {
    return (
        <div>
            <h1>Manage your Business with</h1>
            <div className="pos-container">
                <h1 className="pos">Coffee Record</h1>
                <a href="https://apps.apple.com/us/app/id1530719536?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                    <img className="applogo" alt="AppStore" src={logo}/>
                </a>
            </div>


            <div className="pos_block">
                <ul>
                    <li>Use the same Email & Password from <Link className="link" to='/u-coffee'>UCoffee</Link> to Log In</li>
                    <li>Simple UI/ UX</li>
                    <li>Easy to use</li>
                </ul>
                <img src={screenshot2} alt="" className="other_image" />

            </div>

            <div className="pos_block">
                <ul>
                    <li>Watch your Business growth day by day with Coffee Record</li>
                    <li>Realtime Update data (immediately)</li>
                    <li>Report daily with details revenue/ item sold</li>
                    <li>Click on the Cell for details</li>
                </ul>
                <img src={screenshot3} alt="" className="other_image" />
            </div>

            <div className="pos_block">
                <ul>
                    <li>Summarize number of Item purchases</li>
                    <li>History look up</li>
                    <li>Better managing Inventory</li>
                    <li>required Premium member in <Link className="link" to='/u-coffee'>UCoffee</Link></li>
                </ul>
                <img src={screenshot1} alt="" className="other_image" />
            </div>

            <div className="pos-foot">
                <h3>Download on Appstore!</h3>
                <a href="https://apps.apple.com/us/app/coffee-record/id1549652430" target="_blank" rel="noopener noreferrer">
                    <img className="appstore" alt="AppStore" src={appstore}/>
                </a>
            </div>
           
        </div>
    )
}

export default POS_remote