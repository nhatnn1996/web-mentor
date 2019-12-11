import React, { useState, useEffect } from "react";
// import Card from "@material-ui/core/Card"
// import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import socket from "../../service/socket";
import { changeAccept } from "../../redux/actions/contract";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
  const { value } = props;
  console.log(value.start);
  const timeSurPlus = (Date.parse(new Date()) - (value.start || 0)) / 1000;
  const [time, setTime] = useState(props.value.time * 20 - timeSurPlus);

  console.log("hakjshdk");
  if (value.accept) {
    let t = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    if (time <= 0) clearTimeout(t);
  }

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
  if (time <= 0) {
    return " 00 " + ":" + " 00 " + ":" + " 00 ";
  } else return hours + ":" + minute + ":" + second;
}

const mapState = state => ({ contract: state.contract });
const mapAction = dispatch => bindActionCreators({ changeAccept }, dispatch);
export default connect(
  mapState,
  mapAction
)(Time);
