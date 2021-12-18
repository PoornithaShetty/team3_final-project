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
import SellerLandingPage from "./SellerLandingPage.js"
import Seller_AddHomeDecorProduct from "./Seller_AddHomeDecorProduct.js";
import LoginScreen from "./LoginScreen.js";
import ProfileScreen from './ProfileScreen.js';
import SellerChooseCategory from "./SellerChooseCategory.js";
import Seller_AddPaintingsProduct from './Seller_AddPaintingsProduct.js'
import PageNotFound from './PageNotFound.js'

function App(){
    return(
        <BrowserRouter>
            <Switch>
            <BrowserRouter>
            <Switch>
                <LayoutRoute path='/' exact={true} component={LandingPage}/>
                <LayoutRoute path='/register' exact={true} component={FP_RegistrationScreen}/>
                <LayoutRoute path='/landing' exact={true} component={FP_LoggedInPage}/>
                <LayoutRoute path='/homedecorpage' exact={true} component={HomeDecorPage}/>
                <LayoutRoute path='/paintings' exact={true} component={PaintingsPage}/>
                <LayoutRoute path='/aboutus' exact={true} component={AboutUsScreen}/>
                <LayoutRoute path='/cart' exact={true} component={UserCart}/>
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
                <SellerLayoutRoute path='/seller/sellerlogin' exact={true} component={SellerLogin}/>
                <SellerLayoutRoute path='/seller/register' exact={true} component={SellerRegistration}/>
                <SellerLayoutRoute path='/sellerlanding' exact={true} component={SellerLandingPage}/>
                <SellerLayoutRoute path='/seller/productadd' exact={true} component={SellerChooseCategory}/>
                <SellerLayoutRoute path='/seller/homedecor/productadd' exact={true} component={Seller_AddHomeDecorProduct}/>
                <SellerLayoutRoute path='/seller/paintings/productadd' exact={true} component={Seller_AddPaintingsProduct}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
            </Switch>
        </BrowserRouter>
        
    )
}


export default App;