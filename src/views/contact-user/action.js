import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
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

function MediaCard(props) {
  const classes = useStyles();
  const [info] = React.useState(props.contract ? props.contract.mentor : null);
  const history = useHistory();

  useEffect(() => {
    if (!info) history.push("/");
    if (props.contract.accept === false) {
      history.push("/");
    }
  });

  const reply = accept => () => {
    const contract = props.contract;
    contract.accept = accept;
    props.createContract(contract);
    if (accept === false) {
      socket.emit("cancel-rent", contract);
    } else {
      socket.emit("accept_contract", contract);
    }
  };

  if (info)
    return (
      <Box className={classes.card}>
        <Action
          type={props.renters[0].type}
          accept={props.renters[0].accept}
          reply={reply}
        />
      </Box>
    );
  else return null;
}

const Action = props => {
  const classes = useStyles();
  const [awaits, setAwaits] = useState(false);
  const accept = () => {
    props.reply(true)();
    setAwaits(true);
  };
  const cancel = () => {
    props.reply(false);
  };
  useEffect(() => {});
  if (props.type === "user" && !awaits && props.accept === null)
    return <Typography>Đang đợi phản hồi...</Typography>;
  else if (props.type === "mentor" && props.accept === false) return null;
  else if (props.type === "mentor" && !awaits)
    return (
      <>
        <Button
          onClick={cancel}
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
    );
  else
    return (
      <Typography className={classes.typo}>
        <span>Lưu ý </span>: Tiết học đã bắt đầu. Không chuyển trang hoặc thoát
        ra
      </Typography>
    );
};

const mapState = state => ({
  renters: state.renters,
  contract: state.contract
});
const mapAction = dispatch => bindActionCreators({ createContract }, dispatch);
export default connect(
  mapState,
  mapAction
)(MediaCard);
