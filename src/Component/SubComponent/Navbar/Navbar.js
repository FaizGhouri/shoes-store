import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../Image/sh1.jpg';
import TransitionsModal from '../Modal/Modal';
import PopperPopupState from '../PopOver/PopOver';



const Mainbar = () => {


    const [open, setOpen] = useState(false);




    return (


        <div className="main-container">

            <div className="Two">

                <div>
                    <img src={Logo} className="lo2" alt="img" />
                </div>

                <div className="Sub-btn">
                    <PopperPopupState />
                    <button className="btn-1" onClick={() => { alert('Thank you for Joining') }}>JOIN US</button>
                    <TransitionsModal />
                </div>

            </div>



            <div className="Main-Nav">



                <nav className="nav">

                    <div >

                        <Link to="/" className="logo">

                            SHOE STORE

                        </Link>
                    </div>

                    <ul className="nav-link" style={{ transform: open ? 'translateX(0px)' : "" }}>



                        <li><Link className='a' to="/">HOME</Link></li>

                        <li><Link className='a' to="/Store"> <i class="fa fa-shopping-bag fa-sm" aria-hidden="true"></i> STORE</Link></li>



                    </ul>

                    <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>

                </nav>

            </div>


        </div>

    )
}


export default Mainbar;
