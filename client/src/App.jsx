import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import HomePageBanner from "./components/HomePageBanner/HomePageBanner";
import AllAboutPrasadam from "./components/AllAboutPrasadam/AllAboutPrasadam";
import Home from "./components/Home/Home";
import FoodState from "./contexts/Foods/FoodState";
import GitaState from "./contexts/Gita/GitaState";
import CartState from "./contexts/Cart/CartState";
import FoodsFromHomePageBanner from "./components/FoodsFromHmePageBanner/FoodsFromHomePageBanner";
import Footer from "./components/Footer/Footer";
import SearchResult from "./components/SearchResult/SearchResult";
import CartCardTop from "./components/CartCardAtTop/CartCardTop";
import Cart from "./components/Cart/Cart";
import FoodWithDescription from "./components/FoodWithDescription/FoodWithDescription";

const App = () => {
  return (
    <Router>
      <CartState>
        <GitaState>
          <FoodState>
            <Navbar />
            <HomePageBanner />
            <CartCardTop />
            <Routes>
              <Route
                exact path="/"
                element={<Home />}
              />
              <Route
                path="/search"
                element={<SearchResult />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                exact path="/category/:categoryID"
                element={<FoodsFromHomePageBanner />}
              />
              <Route
                exact path="/food/:foodID"
                element={<FoodWithDescription />}
              />
              <Route
                exact path="/all-about-prasadam"
                element={<AllAboutPrasadam />}
              />
            </Routes>
            <Footer />
          </FoodState>
        </GitaState>
      </CartState>
    </Router>
  );
}

export default App;