import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import api from "../../service/api";
import img from "./rank.png";

const useStyled = makeStyles({
  wrap: {
    width: 400,
    padding: "4rem 2rem",
    borderRadius: "3px",
    background: "white",
    textAlign: "center",
    position: "relative"
  },
  icon: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: "50%",
    background: "white"
  }
});

function Rate(props) {
  const content = React.useRef(null);
  const classes = useStyled();
  const [value, setValue] = React.useState(0);
  const [message, setMessage] = React.useState(null);
  const rating = () => {
    if (value === 0) {
      setMessage("Chưa đánh giá");
    } else {
      api()
        .put("contract", {
          _id: props.contract.id,
          rate: value,
          content: content.current.value
        })
        .then(response => {
          props.close();
        })
        .catch(error => {});
    }
  };
  return (
    <div className={classes.wrap}>
      <img src={img} className={classes.icon} alt="" />
      <h5 className="text-uppercase mb-3">Đánh giá gia sư</h5>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <div className="text-center">
        <span className="alert-danger">{message}</span>
      </div>
      <textarea
        ref={content}
        className="input border mt-4"
        placeholder="Nội dung đánh giá"
        cols="30"
        rows="4"></textarea>
      <div className="mt-3">
        <button
          onClick={rating}
          className="btn shadow-sm btn-info border-none rounded ">
          Đánh giá
        </button>
      </div>
    </div>
  );
}

export default Rate;
