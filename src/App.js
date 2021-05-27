import React from "react";
import './styles/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Cocina } from "./components/Chef/ChefOrder";
import { Inicio } from "./components/Home";
import { Historial } from "./components/Server/OrderHistory";
import { Pedidos } from "./components/Server/Order";
import { Estado } from "./components/Server/OrderStatus";


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
