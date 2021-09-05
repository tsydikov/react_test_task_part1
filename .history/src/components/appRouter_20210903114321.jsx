import React from 'react'
import {  Route, Switch } from "react-router-dom";

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
          <Terms />
        </Route>
        </Switch>
    )
}

export default AppRouter;