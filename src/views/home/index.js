import React from "react";
import Card from "../../components/card";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { connect } from "react-redux";
import Category from "./category";

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
          <Category />
          <h4 className="font-weight-bold mt-4"> Lập trình website </h4>
          <p className="py-2 mb-1">
            Các chuyên gia trong lĩnh vực lập trình trang web sẽ hướng dẩn các
            bạn
          </p>
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
