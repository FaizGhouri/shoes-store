import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Store from '../Store/Store';
import Home from '../Home/Home';
import Adidas from '../SubStore/Adidas/Adidas';
import Nike from '../SubStore/Nike/Nike';
import Puma from '../SubStore/Puma/puma';
import PumaCart from '../SubStore/ShoppingCart/PumaCart';
import NikeCart from '../SubStore/ShoppingCart/NikeCart';
import AdidasCart from '../SubStore/ShoppingCart/AdidasCart';

const MainRouter = () => {

    return(

        <Router>
          

            <Switch>

                <Route exact path="/" component={Home}/>

                <Route path="/Store" component={Store} />

                <Route exact path="/Adidas" component={Adidas} />

                <Route path="/Adidas/:id" component={AdidasCart} />

                <Route exact path="/Nike" component={Nike} />

                <Route path="/Nike/:id" component={NikeCart} />
                
                <Route exact path="/Puma" component={Puma} />

                <Route path="/Puma/:id" component={PumaCart} />


            </Switch>

        </Router>
    )

}


export default MainRouter;