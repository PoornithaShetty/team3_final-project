import { Route } from 'react-router-dom';
import React from 'react';
import SellerPortalHeader from './SellerPortalHeader';
import SellerNavbar from './SellerNavbar';
import Footer from './Footer';
import Herotwo from './Herotwo';

function SellerLayoutRoute(props){
    return(
        <>
            <SellerPortalHeader></SellerPortalHeader>
            <SellerNavbar/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Herotwo/>
            <Footer></Footer>
        </>
    )
}

export default SellerLayoutRoute;