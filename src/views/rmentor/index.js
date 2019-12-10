import React from "react";
import DatePicker from "react-datepicker";
import TrashIcon from "../../components/icon/trash";
import CurencyIcon from "../../components/icon/currency";
import Input from "../../components/input";
import Button from "../../components/button";
import Select from "../../components/select";
import Validation from "./validation";
import Upload from "../../components/upload";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionMentor from "../../redux/actions/mentor";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

let achievement = {
  time: new Date(),
  content: null
};

const Label = styled.label`
  font-weight: 400;
`;
class Rmentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: [{ ...achievement }],
      avatar: "",
      status: {},
      specialized: [],
      semester: []
    };
    this.addAchievement = this.addAchievement.bind(this);
    this.changeAchievement = this.changeAchievement.bind(this);
    this.deleteAchievement = this.deleteAchievement.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
    this.validateSelect = this.validateSelect.bind(this);
    this.validateText = this.validateText.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.props.getGlobal((err, result) => {
      if (result) {
        this.setState({
          specialized: result.specialized,
          semester: result.semester
        });
      }
    });
  }
  addAchievement() {
    this.setState(state => ({
      achievements: [{ ...achievement }, ...state.achievements]
    }));
  }
  changeAchievement(index) {
    const self = this;
    return function(value) {
      let temp = [...self.state.achievements];
      temp[index] = value;
      self.setState({ achievements: temp });
    };
  }
  deleteAchievement(index) {
    const that = this;
    return function() {
      let achies = [...that.state.achievements];
      achies.splice(index, 1);
      that.setState({ achievements: achies });
    };
  }
  onChangeInput(name) {
    return e => {
      this.setState({ [name]: e.target.value });
    };
  }
  changeImage(name) {
    if (name === undefined) {
      const status = { avatar: "required" };
      this.setState({ status: { ...this.state.status, ...status } });
    } else {
      this.setState({
        status: { ...this.state.status, avatar: "valid" },
        avatar: name
      });
    }
  }

  uploadImage = value => {
    this.setState({
      avatar: value
    });
  };

  validateNumber = name => () => {
    const text = this.refs[name].value;
    let status = {};
    if (text === "") status = { [name]: "required" };
    else if (isNaN(Number(text))) status = { [name]: "invalid" };
    else status = { [name]: "valid" };
    this.setState({ status: { ...this.state.status, ...status } });
  };

  validateSelect = name => () => {
    const value = this.refs[name].value;
    if (value === "0")
      this.setState({ status: { ...this.state.status, [name]: "required" } });
    else this.setState({ status: { ...this.state.status, [name]: "valid" } });
  };

  validateText = name => () => {
    const value = this.refs[name].value;
    if (value === "")
      this.setState({ status: { ...this.state.status, [name]: "required" } });
    else this.setState({ status: { ...this.state.status, [name]: "valid" } });
  };

  onSubmit = async () => {
    let status = {};
    const specialized = this.refs.specialized.value;
    const semester = this.refs.semester.value;
    const description = this.refs.description.value;
    const cost = this.refs.cost.value;
    const skype = this.refs.linkSkype.value;
    if (specialized === "0") status = { ...status, specialized: "required" };
    if (semester === "0") status = { ...status, semester: "required" };
    if (!description) status = { ...status, description: "required" };
    if (!cost) status = { ...status, cost: "required" };
    if (!skype) status = { ...status, linkSkype: "required" };

    await this.setState({ status: { ...this.state.status, ...status } }, () => {
      let tempCheck = true;
      Object.keys(this.state.status).forEach(element => {
        if (this.state.status[element] !== "valid") {
          tempCheck = false;
        }
      });
      if (tempCheck) {
        const { achievements, avatar } = this.state;
        const data = new FormData();
        data.append("specialized", specialized);
        data.append("semester", semester);
        data.append("description", description);
        data.append("cost", cost);
        data.append("skype", skype);
        data.append("achievements", JSON.stringify(achievements));
        data.append("avatar", avatar);

        this.props.register(data, (done, data) => {
          if (done) this.props.history.push("/");
        });
      }
    });
  };
  render() {
    const { status } = this.state;
    return (
      <div className="p-5 bg-white box-shadow rounded">
        <Validation error={status.cost}>
          <Label className="col-md-2" htmlFor="">
            Phí thuê *
          </Label>
          <div className="relative px-0 col-md-6">
            <Input
              placeholder="Example: 20"
              ref="cost"
              onBlur={this.validateNumber("cost")}
              type="text"
            />
            <span
              onClick={this.props.onDelete}
              className="svg  svg-fill-main mr-2 absolute absolute-right-center">
              <CurencyIcon />
            </span>
          </div>
        </Validation>
        <Validation error={status.specialized}>
          <Label className="col-md-2" htmlFor="">
            Chuyên ngành *
          </Label>
          <Select
            className="col-md-6"
            ref="specialized"
            onBlur={this.validateSelect("specialized")}
            option={this.state.specialized}
          />
        </Validation>
        <Validation error={status.semester}>
          <Label className="col-md-2" htmlFor="">
            Học kì *
          </Label>
          <Select
            className="col-md-6"
            ref="semester"
            onBlur={this.validateSelect("semester")}
            option={this.state.semester}
          />
        </Validation>
        <Validation error={status.linkSkype}>
          <Label className="col-md-2" htmlFor="">
            Link skype *
          </Label>
          <Input
            onBlur={this.validateText("linkSkype")}
            className="col-md-6"
            placeholder="Link Skype"
            ref="linkSkype"
            type="text"
          />
        </Validation>
        <Validation error={status.description} className="row mb-3">
          <Label className="col-md-2" htmlFor="">
            Mô tả bản thân *
          </Label>
          <textarea
            ref="description"
            className="col-md-6 input border"
            onBlur={this.validateText("description")}
            rows="5"></textarea>
        </Validation>
        <Validation error={status.avatar} className="row mb-3">
          <Label className="col-md-2" htmlFor="">
            Hình ảnh *
          </Label>
          <div className="col-md-6 p-0">
            <Upload onChange={this.changeImage} />
          </div>
        </Validation>
        <div className="row">
          <div className="col-md-2 mb-3">
            <div>Thành tích</div>
            <button
              onClick={this.addAchievement}
              className="text-white btn btn-sm mt-2 btn-info">
              Thêm
              <span className="ml-2">
                <i
                  className="fa fa-plus-circle text-white"
                  aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="col-md-6 px-0">
            {this.state.achievements.map((e, i) => (
              <Achievement
                key={i}
                onDelete={this.deleteAchievement(i)}
                value={e}
                onChange={this.changeAchievement(i)}
                className="mb-3"
              />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="px-0 col-md-8 d-flex">
            <Button onClick={this.onSubmit} className="ml-auto btn btn-success">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const { register, getGlobal } = actionMentor;
const mapActions = dispatch =>
  bindActionCreators({ register, getGlobal }, dispatch);
export default connect(
  null,
  mapActions
)(Rmentor);

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achie: { ...achievement }
    };
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }
  onChangeTime = value => {
    this.setState(
      state => ({ achie: { ...state.achie, time: value } }),
      () => {
        this.props.onChange(this.state.achie);
      }
    );
  };
  onChangeContent = e => {
    const word = e.target.value;
    this.setState(
      state => ({ achie: { ...state.achie, content: word } }),
      () => {
        this.props.onChange(this.state.achie);
      }
    );
  };
  render() {
    const { time, content } = this.props.value;
    return (
      <div className="row no-gutters mb-3 justify-content-between">
        <div className="col-md-5 ">
          <DatePicker
            onChange={this.onChangeTime}
            className="input pointer border"
            selected={time}
            placeholder="Thời gian"
          />
        </div>
        <div className="col-md-6 ">
          <div className="relative bg-white rounded overflow-hidden border">
            <input
              onChange={this.onChangeContent}
              value={content || ""}
              className="input border-0 w-100 pr-5"
              type="text"
              placeholder="Thành tích đạt được"
            />
            <span
              onClick={this.props.onDelete}
              className="svg svg-fill-danger hover mr-2 absolute absolute-right-center pointer">
              <TrashIcon />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
