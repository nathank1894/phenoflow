/** @format */

import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Browse from "./Components/Dashboard/Browse";
import All from "./Components/Dashboard/All";
import Define from "./Components/Dashboard/Define";

// import Statistics from "./Components/layout/Statistics";
import SideNavbar from "./Components/layout/SideNavbar";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Login/Login';
function App(props) {

 

    return (
      <React.Fragment>
        <BrowserRouter>

          <div className="App">

            <SideNavbar>

              <Switch>

                <Route exact path="/" component={Browse} />
                <Route exact path="/all" component={All} />

                <Route exact path="/login" component={Login} />

              
              </Switch>
            </SideNavbar>

          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  
}



export default App;
