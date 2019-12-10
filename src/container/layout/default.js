import React from "react";
import { Route } from "react-router-dom";

const Default = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="main">{children}</div>
    </div>
  );
};

const DefaultRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <Default>
            <Component {...matchProps} />
          </Default>
        );
      }}
    />
  );
};

export default DefaultRoute;
