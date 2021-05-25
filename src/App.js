import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Cocina } from "./components/Cocina/Cocina";
import { Inicio } from "./components/Inicio";
import { Historial } from "./components/Mesero/Historial";
import { Pedidos } from "./components/Mesero/Pedidos";
import { Estado } from "./components/Mesero/Estado";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/mesero/hacer-pedidos" component={Pedidos} />
        <Route exact path="/mesero/estado-pedidos" component={Estado} />
        <Route exact path="/mesero/historial-pedidos" component={Historial} />
        <Route exact path="/cocina" component={Cocina} />
      </Switch>
    </Router>
  );
}
