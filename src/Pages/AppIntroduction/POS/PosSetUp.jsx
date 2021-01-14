import React from 'react'
import './POS.scss'
import screenshot1 from "../../../Image/POS5.jpg"
import screenshot2 from "../../../Image/POS6.jpg"
import screenshot3 from "../../../Image/POS7.jpg"
import screenshot4 from "../../../Image/POS8.jpg"
import screenshot5 from "../../../Image/POS9.jpg"
import screenshot6 from "../../../Image/POS10.webp"
import screenshot7 from "../../../Image/POS11.jpg"


const PosSetUp = () => {
    return (
        <div>

            <h1 className="pos">UCoffee</h1>
            <h2>1. Register New User</h2>
            <img src={screenshot6} alt="" className="other_image" />
            <img src={screenshot5} alt="" className="other_image" />

            <h2>2. Create New Item in Menu</h2>
            <img src={screenshot7} alt="" className="other_image" />
            <img src={screenshot1} alt="" className="other_image" />
            <img src={screenshot2} alt="" className="other_image" />
            <img src={screenshot3} alt="" className="other_image" />

            <h2>3. Make Order</h2>
            <img src={screenshot4} alt="" className="other_image" />

            <h2>4. Additional Information of your Shop</h2>

            <h2>5. Connect to POS Printer</h2>
            <h2>6. View Purchase History</h2>
            <h2>7. Double Check money at the end of the Day</h2>
            <h2>Remotely Control from other Devices</h2>
        </div>


    )
}

export default PosSetUp