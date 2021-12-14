import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import SellerLayoutRoute from "./SellerLayoutRoute.js";
import FP_LoggedInPage from './FP_LoggedInPage';
import FP_RegistrationScreen from "./FP_RegistrationScreen.js";
import HomeDecorPage from "./HomeDecorPage.js";
import AboutUsScreen from "./AboutUsScreen.js";
import PaintingsPage from "./PaintingsPage.js";
import SellerRegistration from "./SellerRegistration.js";
import SellerLogin from "./SellerLogin.js";
import LandingPage from "./LandingPage.js";
import UserCart from "./UserCart.js";



function App(){
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path='/' exact={true} component={LandingPage}/>
                <LayoutRoute path='/register' exact={true} component={FP_RegistrationScreen}/>
                <LayoutRoute path='/homedecorpage' exact={true} component={HomeDecorPage}/>
                <LayoutRoute path='/paintings' exact={true} component={PaintingsPage}/>
                <LayoutRoute path='/aboutus' exact={true} component={AboutUsScreen}/>
                <LayoutRoute path='/cart' exact={true} component={UserCart}/>
                <SellerLayoutRoute path='/seller/login' exact={true} component={SellerLogin}/>
                <SellerLayoutRoute path='/seller/register' exact={true} component={SellerRegistration}/>
                
            </Switch>
        </BrowserRouter>
        
    )
}

export default App;