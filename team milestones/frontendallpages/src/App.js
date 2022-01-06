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
import Login from "./Login.js";
import ProfileScreen from './ProfileScreen.js';
import SellerChooseCategory from "./SellerChooseCategory.js";
import Seller_AddPaintingsProduct from './Seller_AddPaintingsProduct.js';
import ProductDetailsPage from './ProductDetailsPage.js';
import PageNotFound from './PageNotFound.js';
import Sculpture from './Sculpture.js';
import AddProduct from './AddProduct';
import GlassArtPage from "./GlassArtPage.js";
import PrintsPage from "./PrintsPage.js";
import MixedMediaAndCollagePage from "./MixedMediaAndCollagePage.js";
import DollsAndMiniaturesPage from "./DollsAndMiniaturesPage.js";
import LoggedOut from "./LoggedOut.js";

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path='/' exact={true} component={LandingPage}/>
                <LayoutRoute path='/register' exact={true} component={FP_RegistrationScreen}/>
                <LayoutRoute path='/login' exact={true} component={Login}/>
                <LayoutRoute path='/landing' exact={true} component={FP_LoggedInPage}/>
                <LayoutRoute path='/homedecor' exact={true} component={HomeDecorPage}/>
                <LayoutRoute path='/sculpture' exact={true} component={Sculpture}/>
                <LayoutRoute path='/glassart' exact={true} component={GlassArtPage}/>
                <LayoutRoute path='/paintings' exact={true} component={PaintingsPage}/>
                <LayoutRoute path='/prints' exact={true} component={PrintsPage}/>
                <LayoutRoute path='/mixedmediaandcollage' exact={true} component={MixedMediaAndCollagePage}/>
                <LayoutRoute path='/dollsandminiatures' exact={true} component={DollsAndMiniaturesPage}/>
                <LayoutRoute path='/aboutus' exact={true} component={AboutUsScreen}/>
                <LayoutRoute path='/usercart/:userId' exact={true} component={UserCart}/>
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
                <LayoutRoute path="/productadd" exact={true} component={AddProduct} />
                <LayoutRoute path="/product/:productId" exact={true} component={ProductDetailsPage} />
                <SellerLayoutRoute path='/seller/sellerlogin' exact={true} component={SellerLogin}/>
                <SellerLayoutRoute path='/seller/register' exact={true} component={SellerRegistration}/>
                <SellerLayoutRoute path='/sellerlanding' exact={true} component={SellerLandingPage}/>
                <SellerLayoutRoute path='/seller/productadd' exact={true} component={SellerChooseCategory}/>
                <SellerLayoutRoute path='/seller/homedecor/productadd' exact={true} component={Seller_AddHomeDecorProduct}/>
                <SellerLayoutRoute path='/seller/paintings/productadd' exact={true} component={Seller_AddPaintingsProduct}/>
                <Route component={PageNotFound}/>
                <Route path="/loggedout" exact={true} component={LoggedOut}/>
            </Switch>
        </BrowserRouter>
        
    )
}


export default App;