import React, { useEffect } from "react";
import socket from "../../service/socket";
import Card from "../../components/card";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { connect } from "react-redux";

import { Typography } from "@material-ui/core";

// import Mentor from "../../components/mentor"

const Item = styled.div`
  width: 19%;
  flex: 0 0 19%;
  margin: 0 1% 3% 0;
`;

function Home(props) {
  const mentors = props.mentors || [];
  return (
    <React.Fragment>
      {mentors.length === 0 && <div className="text-center"> Loading... </div>}
      {mentors.length > 0 && (
        <div className="d-block">
          <Typography variant="subtitle1" gutterBottom>
            WEBSITE DESIGNER
          </Typography>
          <Grid container>
            {mentors.map((element, index) => (
              <Item key={index}>
                <Card value={element} className="p-5" />
              </Item>
            ))}
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
const mapState = state => ({ user: state.auth, mentors: state.mentors });
export default connect(mapState)(Home);
