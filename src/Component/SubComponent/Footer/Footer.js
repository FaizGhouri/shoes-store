import React from 'react';
import '../Footer/footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {

    return(

        <div className = "Main-footer">

            <div className="Sub-footer" >

                <div className="footer">
                    <div className="s-footer">
                        <p className="gift">GITFTS CARD</p>
                        <p className="gift">PROMOTION</p>
                        <p className="gift">FIND A STORE</p>
                        <p className="gift">SIGN UP FOR MAIL</p>
                        <p className="gift">BECOME A MEMBER</p>
                        <p className="gift">NIKE JOURNAL</p>
                        <p className="gift">SEND US FEEDBACK</p>
                    </div>
                    <div className="s-footer">
                        <p className="gift">GET HELP</p>
                        <p className="os">Order Status </p>
                        <p className="os">Shipping & Delivery</p>
                        <p className="os">Retruns</p>
                        <p className="os">Payment Options</p>
                        <p className="os">Gift Card Balance</p>
                        <p className="os">Contact Us</p>
                    </div>
                    <div className="s-footer">
                        <p className="gift">ABOUT NIKE</p>
                        <p className="os">News</p>
                        <p className="os">Careers</p>
                        <p className="os">Investor</p>
                        <p className="os">Purpos</p>
                        <p className="os">Sustainability</p>
                    </div>
                 
                </div>

                <div className="Icons">

                    <TwitterIcon className="icon" />
                    <FacebookIcon className="icon" />
                    <YouTubeIcon className="icon"/>
                    <InstagramIcon className="icon"/>


                </div>

            </div>

            <div className="lg">
                <div className="location">

                    <LocationOnIcon className="lc" />

                    <p className="lc">Pakistan</p>



                    <p className="lcs"><CopyrightIcon className="lcp"/> 2021 Shoe Store, inc.All Rights Reserved</p>
                    
                </div>
                <div className="guide">
                    <p className="blue">Guide</p>
                    <p className="blue">Term of Sale</p>
                    <p className="blue">Term of Use</p>
                    <p className="blue">Shoe Store Privacy Policy</p>
                    <p className="blue">CA Supply Chains Act</p>
                </div>
            </div>

        </div>

    )

}

export default Footer;