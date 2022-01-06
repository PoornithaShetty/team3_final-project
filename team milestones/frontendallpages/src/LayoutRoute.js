import { Route } from 'react-router-dom';
import React from 'react';
import FP_Header from './FP_Header';
import Footer from './Footer';
import Herotwo from './Herotwo';
import FP_Navbar1 from './FP_Navbar1';

function LayoutRoute(props){
    return(
        <>
      <FP_Header></FP_Header>
      <FP_Navbar1></FP_Navbar1>
            <Route path={props.path} exact={props.exact} component={props.component}/>
    <Herotwo/>
    <Footer></Footer>
    
        </>
    )
}

export default LayoutRoute;