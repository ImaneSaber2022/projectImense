//Dependencies
import React from "react";
import { Redirect, Switch } from "react-router-dom";
 import { Router } from './router';
 
 import PPE from './P.P.E'
 import client from './client'

import ErrorPage from "./error/ErrorPage";
// Layouts
import Layout from "layouts/layout";
import LayoutEmpty from "layouts/LayoutEmpty";
  
// Router

const Routes = ( ) => {
 
  return (
    <Switch>
    <Redirect from="/" exact={true} to="/PPE" />
     
       {/* Auth Pages */}
      <Router routeName="client" path="/client" exact component={client}  layout={Layout}   />
      <Router routeName="PPE" path="/PPE" exact component={PPE}  layout={Layout}   />
      

      <Router path="/404" exact component={ErrorPage} layout={LayoutEmpty} />
      <Redirect to="/404" />
    </Switch>
  );
}

 
export default Routes;  