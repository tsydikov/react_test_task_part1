import React from 'react'
import {  Route, Switch } from "react-router-dom";
import ChoosenRole from '../pages/ChoosenRole';
import Term from '../pages/Terms';
import Index from '../pages/Index';

const AppRouter = () => {
    return (
        <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/choosen">
          <ChoosenRole />
        </Route>
        <Route path="/terms">
          <Term />
        </Route>
        </Switch>
    )
}

export default AppRouter;