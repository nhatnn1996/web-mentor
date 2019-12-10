import React from "react";
import Header from "../../components/partial/header";
import Slide from "../../components/partial/slide";
import Footer from "../../components/partial/mobile";
import { Route } from "react-router-dom";

const HomeTemplate = props => {
  return (
    <Route path={props.path} exact={props.exact}>
      <Header />
      <div className="main">
        <div className="wrap d-flex">
          <Slide />
          <div className="main overflow-hidden p-4">{props.children}</div>
        </div>
      </div>
      <Footer />
    </Route>
  );
};

export default HomeTemplate;
