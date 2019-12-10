import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Chat from "./chat";
import User from "./user";

const useStyle = makeStyles(() => ({
  wrap: {
    height: "calc( 100vh - 60px )",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#f97029"
  },
  notifi: {}
}));

function Contract(props) {
  const classes = useStyle();
  const [index, setIndex] = useState(0);
  const getIndex = i => () => {
    setIndex(i);
  };

  if (props.renters.length)
    return (
      <Grid container>
        <Grid item xs={2}>
          <User getIndex={getIndex} />
        </Grid>
        <Grid item xs={10}>
          <Chat value={props.renters[index]} />
        </Grid>
      </Grid>
    );
  else {
    return (
      <div className={classes.wrap}>
        <h2 className={classes.text}>CHƯA CÓ YÊU CẦU </h2>
        <h2> Quay lại vào lúc khác </h2>
      </div>
    );
  }
}

const mapState = state => ({ renters: state.renters });
export default connect(
  mapState,
  null
)(Contract);
