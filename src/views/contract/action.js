import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createContract } from "../../redux/actions/contract";
import socket from "../../service/socket";

import dotenv from "dotenv";

dotenv.config();

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: "flex",
    justifyContent: "space-between",
    padding: ".5rem 1rem",
    textAlign: "center",
    background: "white"
  },
  typo: {
    textAlign: "center",
    color: "red",
    fontWeight: "300"
  }
});

function Handle(props) {
  const classes = useStyles();

  let { renter } = props;
  renter = { ...renter };
  renter.message = [];

  const reply = accept => () => {
    renter.accept = accept;
    if (accept === false) {
      socket.emit("cancel-contract", renter);
    } else {
      socket.emit("accept-contract", renter);
    }
  };
  return (
    <Box className={classes.card}>
      <Action
        type={props.renters[0].type}
        accept={props.renters[0].accept}
        reply={reply}
      />
    </Box>
  );
}

const Action = props => {
  // const classes = useStyles();
  const accept = () => {
    props.reply(true)();
  };

  return (
    <>
      {props.type === "user" && props.accept === null && (
        <Button
          onClick={props.reply(false)}
          variant="contained"
          size="small"
          className="ml-3"
          color="default">
          Hủy
        </Button>
      )}
      {props.type === "user" && props.accept === true && (
        <i className="font-weight-light">Tiết học bắt đầu.</i>
      )}
      {props.type === "mentor" && props.accept === null && (
        <>
          <Button
            onClick={props.reply(false)}
            variant="contained"
            size="small"
            className="ml-3"
            color="default">
            Hủy
          </Button>
          <Button
            onClick={accept}
            className="ml-3"
            variant="contained"
            size="small"
            color="primary">
            Bắt đầu
          </Button>
        </>
      )}
      {props.type === "mentor" && props.accept === true && (
        <i className="font-weight-light">Tiết học bắt đầu.</i>
      )}
    </>
  );
};

const mapState = state => ({
  renters: state.renters
});
const mapAction = dispatch => bindActionCreators({ createContract }, dispatch);
export default connect(
  mapState,
  mapAction
)(Handle);
