import React from 'react';
import '../ShoppingCart/ShoppingCart.css';
import { useParams } from 'react-router-dom'
import PumaShoes from '../ShoesData/PumaShoes.json'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

const PumaCart = () => {

    const history = useHistory();


    const { id } = useParams();

    const shoe = PumaShoes[id];

    if (!shoe)
        return <h1>Product Not Found!</h1>

    console.log(shoe)

    return (

        <div className="Main-Div">

            <div className="Header-Logo">

                <button className="Button-Arrow" onClick={() => history.goBack()}>

                    <ArrowBackIos className="Back-Arrow" />

                </button>

                <p className="Adid-Logo">PUMA</p>

            </div>

            <div className="one-2">incoming I Shop the latest arrivals here</div>

            <div className="cart">

                <div className="cart-img">

                    <img src={shoe.image} alt="img" className="Ci" />

                </div>

                <div className="AddCart">

                    <h5>PUMA</h5>
                    <h4>{shoe.name}</h4>
                    <h6>{shoe.shoeType}</h6>
                    <h6>{shoe.price}</h6>

                    <button className="Buy-Now" onClick={() => alert('Thank you for Shopping')} >BUY NOW</button>

                </div>
            </div>

        </div>
    )

}


export default PumaCart;