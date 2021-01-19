import React from 'react'
import './POS.scss'
import screenshot1 from "../../../Image/POS5.jpg"
import screenshot2 from "../../../Image/POS6.jpg"
import screenshot3 from "../../../Image/POS7.jpg"
import screenshot4 from "../../../Image/POS8.jpg"
import screenshot5 from "../../../Image/POS9.jpg"
import screenshot6 from "../../../Image/POS10.webp"
import screenshot7 from "../../../Image/POS11.jpg"
import screenshot8 from "../../../Image/POS12.jpg"
import screenshot9 from "../../../Image/POS13.jpg"
import screenshot10 from "../../../Image/POS14.jpg"
import screenshot11 from "../../../Image/POS15.jpg"
import screenshot12 from "../../../Image/POS16.jpg"
import screenshot13 from "../../../Image/POS17.jpg"
import screenshot14 from "../../../Image/POS18.webp"
import screenshot15 from "../../../Image/POS19.webp"
import screenshot16 from "../../../Image/POS20.webp"
import screenshot17 from "../../../Image/POS21.webp"
import screenshot18 from "../../../Image/POS22.webp"
import {Link} from 'react-router-dom';


const PosSetUp = () => {
    return (
        <div>

            <h1 className="pos">UCoffee</h1>
            <h2 className="pos-small-title">1. Register New User</h2>
            <div className="pos_block">
                <ul>
                    <li>Use your Email to create New User</li>
                    <li>2 passwords required</li>
                    <li>1 for Login</li>
                </ul>
                <img src={screenshot6} alt="" className="other_image" />
            </div>

            <div className="pos_block">
                <ul>
                    <li>Second password to unlock functionalities</li>
                    <li>For Managers or Owner only</li>
                    <li>Keep secret from Staff</li>
                </ul>
                <img src={screenshot5} alt="" className="other_image" />
            </div>
           

            <h2 className="pos-small-title">2. Create New Item in Menu</h2>
            <div className="no-note">
                <img src={screenshot7} alt="" className="other_image" />
                <img src={screenshot1} alt="" className="other_image" />
                <img src={screenshot2} alt="" className="other_image" />
                <img src={screenshot3} alt="" className="other_image" />
            </div>
            

            <h2 className="pos-small-title">3. Make Order</h2>
            <div className="no-note">
                <img src={screenshot4} alt="" className="other_image" />
                <img src={screenshot8} alt="" className="other_image" />
            </div>
            

            <h2 className="pos-small-title">4. Additional Information of your Shop</h2>
            <div className="no-note">
                <img src={screenshot10} alt="" className="other_image" />
                <img src={screenshot9} alt="" className="other_image" />
                <img src={screenshot17} alt="" className="bill-image" />
            </div>
            <h2 className="pos-small-title">5. Connect to POS Printer</h2>
            <div className="pos_block">
                <ul>
                    <li>Need IP address of the Printer</li>
                    <li>For New Pos Printer, seller will set up IP Address</li>
                    <li>How to set up: <a href="https://www.waiterio.com/docs/en/documentation/how-to-setup-a-thermal-printer-with-ethernet-cable/">Thermal Printer IP </a>, <a href="https://www.youtube.com/watch?v=yxVqJu9C1rE">Youtube</a></li>
                    <li>Alread have one, each Printer has its way to print out its IP Address </li>
                </ul>
                <img src={screenshot16} alt="" className="other_image" />
            </div>
            <div className="pos_block">
                <ul>
                    <li>Printer will print out if successfully connected</li>
                </ul>
                <img src={screenshot18} alt="" className="bill-image rotate" />
            </div>
            <h2 className="pos-small-title">6. View Purchase History</h2>
            <div className="no-note">
                <img src={screenshot11} alt="" className="other_image" />
                <img src={screenshot12} alt="" className="other_image" />
            </div> 
            <h2 className="pos-small-title">7. Double Check money at the end of the Day</h2>
            <div className="no-note">
                <img src={screenshot13} alt="" className="other_image" />
            </div>
            <h2 className="pos-small-title">8. Inventory Control</h2>
            <div className="no-note">
                <img src={screenshot14} alt="" className="other_image" />
                <img src={screenshot15} alt="" className="other_image" />
            </div>
            
            <h2 className="pos-small-title">9. Remotely Control from other Devices</h2>
            <h4 className="pos-h4">Once you Sign up and upgrade to Premium, you can view History Record of your Business from other Devices</h4>
            <h4 className="pos-h4">Go to AppStore and Download <Link className="link" to='/ucoffee-remote'>Coffee Record</Link></h4>
        </div>


    )
}

export default PosSetUp