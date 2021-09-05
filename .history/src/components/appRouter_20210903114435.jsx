import React from 'react'
import {  Route, Switch } from "react-router-dom";
import Term from '../pages/Terms';

const AppRouter = () => {
    return (
        <Switch>
        <Route path="">
          <Choose />
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