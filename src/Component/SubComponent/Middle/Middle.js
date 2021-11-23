import React from 'react';
import '../Middle/Middle.css'
import Copy from '../../../Image/Copy.jpg'
import Summer from '../../../Image/sp3.jpg'
import Summer1 from '../../../Image/sp6.jpeg'
import Summer2 from '../../../Image/sp5.jpg'
import Logo from '../../../Image/sh1.jpg';
import Just from '../../../Image/nike-just-do-it.jpg'
import Just1 from '../../../Image/nike-just-do-it (1).jpg'
import Just2 from '../../../Image/nike-just-do-it (2).jpg'

const Middle = () => {

    return (

        <div className="Main-Middle">

            <div className="middle-image">

                <img src={Copy} alt="img" />

            </div>

            <div className="Summer">

                <img className="Summer-img" src={Summer} alt="img" />

                <div className="SS">

                    <div>

                        <img className="Summer-img1" src={Summer1} alt="img" />
                        <p>Summer Shoes</p>

                    </div>

                    <div>

                        <img className="Summer-img1" src={Summer2} alt="img" />
                        <p>Summer Sandle</p>

                    </div>


                </div>

            </div>

            <div className="member">

                <div className="benifits">

                    <p className="fits">Member Benifits</p>

                </div>

                <div className="where">

                    <img src={Logo} width="100px" height="100px" alt="img" />

                    <p className="Athletes">Where All <br /> Athletes Belong</p>
                    <p className="Athl">Things are better as a Nike Member. Get first and exclusive access to the newest styles & innovation,<br /> free shipping, birthday rewards and more</p>

                    <div className="two-btn">
                        <button className="all-btn">Join Us</button>
                        <button className="all-btn">Sign In</button>
                    </div>

                </div>

            </div>


            <div className="Just">
                <div className="do">
                    <img width="400px" height="300px" src={Just2} alt="img" />
                    <p>Exclusive Nike Shopping Perks</p>
                </div>
                <div  className="do">
                    <img width="400px" height="300px" src={Just} alt="img" />
                    <p>First & Exclusive Access</p>
                </div>
                <div  className="do">
                    <img width="400px" height="300px" src={Just1} alt="img" />
                    <p>Member Rewards & Offers</p>
                </div>
            </div>
        </div>

    )

}
export default Middle;