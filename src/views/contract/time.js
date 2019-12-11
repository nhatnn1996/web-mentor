import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Rating from "./rating";

const useStyles = makeStyles(theme => ({
  card: {
    display: "inline-flex"
  },
  typography: {
    fontSize: "1.5rem",
    color: "grey",
    margin: 0
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
}));

const Time = function(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { value } = props;
  const timeSurPlus = value.start
    ? (Date.parse(new Date()) - value.start) / 1000
    : 0;
  const [time, setTime] = useState(
    props.value.time * 60 * 5 - timeSurPlus + 50
  );
  let t = null;

  if (value.accept) {
    t = setTimeout(() => {
      if (time === 1) handleOpen();
      if (time <= 0) {
        clearTimeout(t);
      } else {
        setTime(time - 1);
      }
    }, 1000);
  }
  useEffect(() => {
    return () => clearTimeout(t);
  });

  return (
    <Box className={classes.card}>
      <Box
        fontWeight="700"
        component="h1"
        className={classes.typography}
        textAlign="center">
        {handleTime(time)}
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Rating close={handleClose} contract={props.value} />
          </div>
        </Fade>
      </Modal>
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
    const strTime = " 00 : 00 : 00 ";
    return strTime;
  } else return hours + ":" + minute + ":" + second;
}

export default Time;
