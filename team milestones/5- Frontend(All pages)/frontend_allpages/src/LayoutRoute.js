import { Route } from 'react-router-dom';
import React from 'react';
import FP_Header1 from './FP_Header1';
import Footer from './Footer';
import Herotwo from './Herotwo';
import FP_Navbar1 from './FP_Navbar1';

function LayoutRoute(props){
    return(
        <>
      <FP_Header1></FP_Header1>
            <Route path={props.path} exact={props.exact} component={props.component}/>
    <Herotwo/>
    <Footer></Footer>
        </>
    )
}

export default LayoutRoute;