import React, { useState, useEffect } from "react";
// import Card from "@material-ui/core/Card"
// import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import socket from "../../service/socket";
import { changeAccept } from "../../redux/actions/contract";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    display: "inline-flex"
  },
  typography: {
    fontSize: "1.5rem",
    color: "grey",
    margin: 0
  }
}));

const Time = function(props) {
  const classes = useStyles();
  const history = useHistory();
  const [accept, setAccept] = useState(false);
  const temp = props.contract ? props.contract.time : 0;
  const [time, setTime] = useState(temp * 60 * 60);

  if (temp === 0) {
    history.push("/");
  }

  useEffect(() => {
    socket.on("accept_contract", data => {
      if (data.accept) {
        setAccept(true);
        props.changeAccept(true);
      }
    });
  });

  if (time !== 0 && accept) {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  if (!props.contract) return <div>Loading</div>;
  else
    return (
      <Box className={classes.card}>
        <Box
          fontWeight="700"
          component="h1"
          className={classes.typography}
          textAlign="center">
          {handleTime(time)}
        </Box>
      </Box>
    );
};

function handleTime(time) {
  let hours = parseInt(time / 60 / 60);
  hours = hours > 10 ? hours : "0" + hours;
  let minute = parseInt((time / 60) % 60);
  minute = minute > 10 ? minute : "0" + minute;
  let second = parseInt((time % 60) % 60);
  second = second > 10 ? second : "0" + second;
  return hours + ":" + minute + ":" + second;
}

const mapState = state => ({ contract: state.contract });
const mapAction = dispatch => bindActionCreators({ changeAccept }, dispatch);
export default connect(
  mapState,
  mapAction
)(Time);
