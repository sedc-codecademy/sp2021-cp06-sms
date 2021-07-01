import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import ProductDetail from "./components/ProductDetail";
import Contact from './components/Contact'
import Footer from './components/Footer'

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=3`);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  
  return (
    <Router>
      <div className="App">
      <Navigation products={products} />
      <Switch>
        <Route exact path="/">
          <Home products={products}/>
        </Route>
        <Route path="/product/:id" component={ProductDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route path="**">
          <Home products={products}></Home>
        </Route>
      </Switch>
      <Footer />
      </div>

    </Router>

  );
};

export default App;
