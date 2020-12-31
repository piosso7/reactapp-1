import React from "react";
import "../components/Header.css";
import { Route, Switch } from "react-router-dom";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="miasto1" />} />
        <Route path="/products" render={() => <img src={img2} alt="panel" />} />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="miasto3" />}
        />
        <Route render={() => <img src={img2} alt="panel" />} />
      </Switch>
    </>
  );
};

export default Header;
