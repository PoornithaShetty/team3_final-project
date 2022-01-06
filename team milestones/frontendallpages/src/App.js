import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import FP_LoggedInPage from './FP_LoggedInPage';
import FP_RegistrationScreen from "./FP_RegistrationScreen.js";
import HomeDecorPage from "./HomeDecorPage.js";
import AboutUsScreen from "./AboutUsScreen.js";
import PaintingsPage from "./PaintingsPage.js";
import LandingPage from "./LandingPage.js";
import UserCart from "./UserCart.js";
import Login from "./Login.js";
import ProfileScreen from './ProfileScreen.js';
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
                <LayoutRoute path="/loggedout" exact={true} component={LoggedOut}/>
                <LayoutRoute path="/product/:productId" exact={true} component={ProductDetailsPage} />
                <Route component={PageNotFound}/>
                <Route path="/loggedout" exact={true} component={LoggedOut}/>
            </Switch>
        </BrowserRouter>
        
    )
}


export default App;