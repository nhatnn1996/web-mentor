import React, { useState } from "react";
import { connect } from "react-redux";
import StarIcon from "../../components/icon/star";
import CurrencyIcon from "../../components/icon/currency";
import VoteIcon from "../../components/icon/vote";
import Tab from "../../components/tab";
import Info from "../../components/partial/info";
import Comment from "../../components/partial/comment";
import Achievements from "../../components/partial/achievements";
import styled from "styled-components";
import ViewRent from "../../components/viewRent";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { URLIMG } from "../../service/config";
import { useRouteMatch } from "react-router-dom";
import { CardMedia, CardActionArea } from "@material-ui/core";
import { readMentor } from "../../redux/actions/mentor";
function mapStateToProps(state) {
  return {
    mentor: state.mentor,
    user: state.auth
  };
}

const Level = styled.div`
  bottom: 10px;
  left: 0;
  padding: 8px 10px;
  border-radius: 0 3px 3px 0;
  background: #ff9e6a;
  position: absolute;
  color: white;
`;
const Name = styled.div`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 110%;
    background: green;
  }
`;

const tabs = value => [
  {
    title: "Thới thiệu",
    icon: <i className="fa fa-info-circle ml-2" aria-hidden="true"></i>,
    render: <Info mentor={value.mentor} />
  },
  {
    title: "Đánh giá",
    icon: <i className="fa fa-star ml-2" aria-hidden="true"></i>,
    render: <Comment mentor={value.mentor} />
  },
  {
    title: "Thành tích",
    icon: <i className="fa fa-trophy ml-2" aria-hidden="true"></i>,
    render: <Achievements mentor={value.mentor} />
  }
];
function Profile(props) {
  const [mentor, setMentor] = useState(null);
  const [modal, setModal] = useState(false);
  const match = useRouteMatch();
  const changeModal = () => {
    setModal(!modal);
  };

  readMentor(match.params.id, (err, result) => {
    if (result && !mentor) {
      setMentor(result);
    }
  });
  if (mentor === null) return <div className="text-center">Loading...</div>;
  else
    return (
      <div className="profile row">
        <div className="col-md-4">
          <div className="box-shadow text-center bg-white rounded p-4 ">
            <CardActionArea className="relative">
              <CardMedia
                style={{ paddingTop: "calc( 2/3*100% )" }}
                className="rounded w-100"
                image={URLIMG + mentor.avatar}
                title="Hình đại diện"
              />
              <Level> Thành thạo </Level>
            </CardActionArea>
            <Name className="mt-3 h3 text-center">{mentor.name}</Name>
            <div className="row no-gutters">
              <div className="col-md-3 font-weight-bold">
                <span className="name mr-2">{mentor.mentor.cost}</span>
                <CurrencyIcon color="#ff9e6a" />
              </div>
              <div className="col-md-6 ">
                <span className="svg svg-fill-main ">
                  <StarIcon />
                </span>
                <span className="svg svg-fill-main ">
                  <StarIcon />
                </span>
                <span className="svg svg-fill-main ">
                  <StarIcon />
                </span>
                <span className="svg svg-fill-main ">
                  <StarIcon />
                </span>
                <span className="svg svg-fill-secondary">
                  <StarIcon />
                </span>
              </div>
              <div className="col-md-3 text-left">
                <b className="mr-2">{mentor.scores}</b>
                <span className="svg svg-fill-main">
                  <VoteIcon />
                </span>
              </div>
            </div>
            <div className="text-left mt-3">
              <div className="d-flex justify-content-between mb-2 mb-md-4">
                <button
                  className="button button-sm button-primary"
                  onClick={changeModal}>
                  Thuê
                  <i className="fa fa-check-circle ml-2" aria-hidden="true"></i>
                </button>
                <button className="button button-sm button-main">
                  Theo dõi
                  <i className="fa fa-gratipay ml-2" aria-hidden="true"></i>
                </button>
              </div>
              <p className="text-truncate">
                Email: <b>{mentor.email}</b>
              </p>
              <p>
                Chuyên ngành: <b>{mentor.mentor.specialized}</b>
              </p>
              <p>
                Skype: <b>{mentor.mentor.skype}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 tab ">
          <div className="bg-white h-100 rounded overflow-hidden shadow-sm">
            <Tab value={tabs(mentor)} />
          </div>
        </div>

        <Modal open={modal} onClose={changeModal}>
          <div>
            <Fade in={modal}>
              <ViewRent value={mentor} closePopup={changeModal}></ViewRent>
            </Fade>
          </div>
        </Modal>
      </div>
    );
}

const mapAction = () => ({
  readMentor: readMentor
});
export default connect(
  mapStateToProps,
  mapAction
)(Profile);
