import React from 'react';
import '../Store/store.css';
import { Link } from 'react-router-dom';
import Image1 from '../../Image/Air-Jordan-Shoes-Desktop-Backgrounds.jpg'
import Image2 from '../../Image/Pumaback2.jpg'
import Image3 from '../../Image/Adidasback.jpg'
import Navbar from '../SubComponent/Navbar/Navbar';
import Typewriter from '../SubComponent/Typewriter/Typewriter';
import Carousel from 'react-bootstrap/Carousel';
import useWebAnimations, { fadeInUp, fadeInLeft } from "@wellyshen/use-web-animations";



const Store = () => {

    const { ref } = useWebAnimations(fadeInUp);

    return (

        <div>


            <Navbar />
            <Typewriter />



            <Carousel fade>
                <Carousel.Item>

                    <div className="Main-Car">

                        <div ref={ref} className="v-block">

                            <h2 >NIKE SHOE <br /> STORE</h2>

                            <Link to="/Nike">

                                <button className="GH">GO THERE</button>

                            </Link>
                        </div>

                        <div className="f-block">
                            <img
                                className="d-block"
                                src={Image1}
                                alt="First slide"
                            />
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="Main-Car">

                        <div className="v-block">

                            <h2 >PUMA SHOE <br /> STORE</h2>

                            <Link to="/Puma">

                                <button className="GH">GO THERE</button>

                            </Link>
                        </div>

                        <div>
                            <img
                                className="d-block"
                                src={Image2}
                                alt="First slide"
                            />
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className="Main-Car">


                        <div className="v-block">

                            <h2 >ADIDAS SHOE <br /> STORE</h2>

                            <Link to="/Adidas">

                                <button className="GH">GO THERE</button>

                            </Link>
                        </div>

                        <div>
                            <img
                                className="d-block"
                                src={Image3}
                                alt="First slide"
                            />
                        </div>
                    </div>


                </Carousel.Item>
            </Carousel>





            {/* 
            <div className='mainBar'>


                <div className="main-container2">

                    <nav className="nav2">

                        <div className="logo2">

                            SHOE STORE

                    </div>

                        <ul className="nav-link2" >


                            <li><Link className='a2' to="/">HOME</Link></li>

                            <li><Link className='a2' to="/Store"> <i class="fa fa-shopping-bag fa-sm" aria-hidden="true"> STORE</i></Link></li>




                        </ul>


                    </nav>

                </div>

            </div>

            <div className="empty">

                <hr />

                <p className="go">GO THERE AND BUY YOUR FAVOURITE SHOES</p>

                <hr />

            </div>

            <div className='Mainbox'>

                <div className="box">

                    <div className="jordan">

                        <p className="SP">ADIDAS SHOES STORE</p>

                    </div>

                    <div className="container">

                        <img src={Image1} alt="img" className="img" />


                        <button className="button"><Link className="a3" to="/Adidas">GO THERE</Link></button>


                    </div>

                </div>
                
                <div className="box">

                    <div className="jordan">

                        <p className="SP">NIKE SHOES STORE</p>

                    </div>

                    <div className="container">

                        <img src={Image2} alt="img" className="img" />


                        <button className="button"><Link className="a3" to="/Nike">GO THERE</Link></button>


                    </div>

                </div>
                
                <div className="box">

                    <div className="jordan">

                        <p className="SP">PUMA SHOES STORE</p>

                    </div>

                    <div className="container">

                        <img src={Image3} alt="img" className="img" />


                        <button className="button"><Link className="a3" to="/Puma">GO THERE</Link></button>


                    </div>

                </div>


            </div> */}

        </div>
    )

}


export default Store;