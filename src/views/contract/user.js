import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Name } from "./style";
import { connect } from "react-redux";
import { URLIMG } from "../../service/config";

const useStyles = makeStyles(theme => ({
  card: {
    padding: "0",
    background: "white",
    borderBottom: "1px solid rgb(229, 229, 233)",
    borderRadius: 0,
    height: "calc( 100vh - 60px )"
  },
  cardAction: {
    padding: "1rem 1rem",
    margin: "0 0rem"
  },
  avatars: {
    width: "30px",
    height: "30px"
  }
}));

const User = function(props) {
  const classes = useStyles();
  const value =
    props.value.type === "user"
      ? { ...props.value.mentor }
      : { ...props.value.user };
  // const location = props.value.type === "user" ? "mentor " : "user";
  value.avatar = URLIMG + value.avatar;
  return (
    <CardActionArea onClick={props.getIndex} className={classes.cardAction}>
      <Box m="0" display="flex" alignItems="center">
        <Avatar size="small" src={value.avatar} className={classes.avatars} />
        <Box className="flex-grow-1 overflow-hidden">
          <Name className="ml-3 font-weight-bold text-truncate ">
            {value.name}
          </Name>
          <Box className="ml-3 " fontWeight="300">
            {current(props.value.current)}
          </Box>
        </Box>
      </Box>
    </CardActionArea>
  );
};

const ListUser = function(props) {
  const classes = useStyles();
  return (
    <Box className={classes.card} borderRadius="borderRadius">
      {props.renters
        .sort((a, b) => b.current - a.current)
        .map((e, index) => (
          <User
            value={e}
            key={index}
            getIndex={props.getIndex(index)}
            className={classes.user}
          />
        ))}
    </Box>
  );
};

const mapState = () => state => ({ renters: state.renters });
export default connect(mapState)(ListUser);

const current = time => {
  const date = new Date();
  const current = Date.parse(date);
  const temp = (current - time) / 1000;
  if (temp / 60 / 60 / 24 >= 1)
    return Math.floor(temp / 60 / 60 / 24) + " ngày trước";
  else if (temp / 60 / 60 >= 1)
    return Math.floor(temp / 60 / 60) + " giờ trước";
  else if (temp / 60 >= 1) return Math.floor(temp / 60) + " phút trước";

  if (temp / 60 >= 1) return Math.floor(temp / 60) + " phút trước";
  else return Math.floor(temp) + " giây trước";
};
