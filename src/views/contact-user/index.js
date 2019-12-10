import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Chat from "./chat";
import User from "./user";
function Contract(props) {
  const [index, setIndex] = useState(0);
  const getIndex = i => () => {
    setIndex(i);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <User getIndex={getIndex} />
        </Grid>
        <Grid item xs={10}>
          <Chat value={props.renters[index]} />
        </Grid>
      </Grid>
    </div>
  );
}

const mapState = state => ({ renters: state.renters });
export default connect(mapState)(Contract);
