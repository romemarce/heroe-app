import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/NavBar';
import { DashbordRoutes } from './DashbordRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashbordRoutes} />
        </Switch>
      </div>
    </Router>
  );
}
