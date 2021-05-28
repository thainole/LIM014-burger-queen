import React from "react";
import './styles/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./components/Home";
import { Order } from "./components/Server/Order";
import { OrderStatus } from "./components/Server/OrderStatus";
import { OrderHistory } from "./components/Server/OrderHistory";
import { Chef } from "./components/Chef/ChefOrder";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mesero/hacer-pedidos" component={Order} />
        <Route exact path="/mesero/estado-pedidos" component={OrderStatus} />
        <Route exact path="/mesero/historial-pedidos" component={OrderHistory} />
        <Route exact path="/cocina" component={Chef} />
      </Switch>
    </Router>
  );
}
