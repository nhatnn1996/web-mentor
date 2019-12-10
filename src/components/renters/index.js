import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createContract } from "../../redux/actions/contract";
import socket from "../../service/socket";
import dotenv from "dotenv";

dotenv.config();

const Wrap = styled.div`
  padding: 10px;
`;
const TR = styled.tr`
  margin: 10px 0;
  padding: 10px;
  background: white;
  border-radius: 5px;
`;

const TD = styled.td`
  padding: 6px;
`;

const TH = styled.th`
  padding: 10px;
  position: sticky;
  top: 0px;
  background: white;
  font-weight: 500;
  min-width: 100px;
`;

const Header = styled.thead`
  background: white;
  width: 100%;
`;
const Table = styled.table`
  border-spacing: 0 1rem;
  border-collapse: separate;
  position: relative;
  max-height: 500px;
  display: block;
`;

const Body = styled.tbody``;

const current = time => {
  const date = new Date();
  const current = Date.parse(date);
  const temp = (current - time) / 1000;
  if (temp / 60 >= 1) return Math.floor(temp / 60) + " phút trước";
  else if (temp / 60 / 60 >= 1)
    return Math.floor(temp / 60 / 60) + " giờ trước";
  else if (temp / 60 / 60 / 24 >= 1)
    return Math.floor(temp / 60 / 60 / 24) + " ngày trước";
  if (temp / 60 >= 1) return Math.floor(temp / 60) + " phút trước";
  else return Math.floor(temp) + " giây trước";
};

const Renters = props => {
  const [state, setState] = React.useState({
    listRenter: props.renters
  });

  // React.useEffect( ()=> { console.log(props) })
  const cancel = item => () => {
    const index = state.listRenter.findIndex(
      element => element.user.id === item.user.id
    );
    let Newlist = state.listRenter;
    Newlist.splice(index, 1);
    setState({ listRenter: Newlist });
    socket.emit("cancel-rent", item.user);
  };

  const accept = item => () => {
    item.type = "mentor";
    props.createContract(item);
    const index = state.listRenter.findIndex(
      element => element.user.id === item.user.id
    );
    let Newlist = state.listRenter;
    Newlist.splice(index, 1);
    setState({ listRenter: Newlist });
    props.history.push("/contract");
  };

  return (
    <Wrap>
      {props.renters.length === 0 && (
        <div className="text-center"> Chưa có ai gởi yêu cầu đến bạn </div>
      )}
      {props.renters.length > 0 && (
        <Table>
          <Header>
            <TR>
              <TH>BẠN</TH>
              <TH>T.GIAN</TH>
              <TH>THUÊ</TH>
              <TH>TIN NHẮN</TH>
              <TH>XỬ LÝ</TH>
            </TR>
          </Header>
          <Body>
            {props.renters
              .sort((a, b) => b.current - a.current)
              .map((element, index) => (
                <TR key={index}>
                  <TD>
                    <span className="mr-2">{element.user.name}</span>
                    <img
                      src={element.user.avatar}
                      className="size-sm rounded-circle"
                      alt="Hình đại diện"
                    />
                  </TD>
                  <TD>
                    <small>{current(element.current)}</small>
                  </TD>
                  <TD>
                    <small> {element.time}</small>
                  </TD>
                  <TD style={{ maxWidth: "300px" }}> {element.content} </TD>
                  <TD>
                    <button
                      className="btn btn-sm btn-info mr-3"
                      onClick={accept(element)}>
                      Nhận
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={cancel(element)}>
                      Hủy
                    </button>
                  </TD>
                </TR>
              ))}
          </Body>
        </Table>
      )}
    </Wrap>
  );
};
const mapState = state => ({ renters: state.renters });
const mapAction = dispatch => ({
  createContract: payload => dispatch(createContract(payload))
});
export default connect(
  mapState,
  mapAction
)(withRouter(Renters));
