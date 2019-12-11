import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import DefaultTemplate from "../layout/default";
import HomeTemplate from "../layout/home";
// import EditTemplate from "../layout/views";
import Home from "../../views/home";
import Login from "../../views/login";
import Register from "../../views/register";
import Profile from "../../views/profile";
// import Edit from "../../views/profile";
import History from "../../views/history";
import Rmentor from "../../views/rmentor";
import Verify from "../../views/verify";
import VerifySuccess from "../../views/verify-success";
import Forget from "../../views/forget";
import ResetPassword from "../../views/reset-password";
import Contract from "../../views/contract";
import Header from "../../components/partial/header";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

import * as renterAction from "../../redux/actions/renters";
import * as mentorsAction from "../../redux/actions/mentor";

import { onSocket, clearSocket, onUpdate } from "../socket";

const customHistory = createBrowserHistory();
class Custom extends React.Component {
  componentDidMount() {
    onSocket(this.props);
  }
  componentDidUpdate() {
    onUpdate(this.props);
  }
  componentWillUnmount() {
    clearSocket();
  }
  render() {
    const info = this.props.info;
    return (
      <Router history={customHistory}>
        {!info && (
          <Switch>
            <DefaultTemplate path="/login" component={Login} />
            <DefaultTemplate path="/register" component={Register} />
            <DefaultTemplate path="/forget" component={Forget} />
            <DefaultTemplate
              path="/reset-password/:code/:email"
              component={ResetPassword}
            />

            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        )}

        {info && (
          <Switch>
            <Route path="/verify-success/:code" exact>
              <VerifySuccess />
            </Route>
            <DefaultTemplate path="/verify" component={Verify} />

            {!info.active && (
              <Switch>
                <DefaultTemplate path="/" component={VerifySuccess} />
                <DefaultTemplate path="/verify" component={Verify} />
                <Route path="*">
                  <Redirect to="/verify" />
                </Route>
              </Switch>
            )}

            {info.active && (
              <Switch>
                <HomeTemplate exact path="/" children={<Home />} />
                <HomeTemplate
                  exact
                  path="/profile/:name/:id"
                  children={<Profile />}
                />
                <HomeTemplate path="/history" exact>
                  <History />
                </HomeTemplate>
                <Route path="/contract" exact>
                  <Header /> <Contract />
                </Route>
                <HomeTemplate path="/register-mentor" exact>
                  <Rmentor history={customHistory} />
                </HomeTemplate>

                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            )}
          </Switch>
        )}

        {/* <Route path="/">
            <NotFound />
          </Route> */}
      </Router>
    );
  }
}

// const NotFound = () => {
//   return <div className=" text-center h1 font-weight-bold">NotFound 404</div>;
// };

const mapState = state => ({
  info: state.auth
});
const mapAction = dispatch =>
  bindActionCreators({ ...renterAction, ...mentorsAction }, dispatch);
export default connect(
  mapState,
  mapAction
)(Custom);
