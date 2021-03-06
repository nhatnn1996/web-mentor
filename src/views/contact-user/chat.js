import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Blue from "@material-ui/core/colors/blue";
import Time from "./time";
import Action from "./action";

// import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  card: {
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  content: {
    padding: "1rem 1rem .5rem 1rem",
    overflowY: "scroll",
    flexGrow: 1,
    background: "#f2f2f26b",
    "&::-webkit-scrollbar-thumb": {
      background: "#757575",
      borderRadius: 3
    },
    "&::-webkit-scrollbar": {
      width: 6,
      height: 8,
      backgroundColor: "#f2f2f2" /* or add it to the track */
    }
  },
  text: {
    background: "white"
  },
  chatbox: {
    minHeight: 100,
    borderRadius: "0px 0px 3px 3px",
    borderTop: "1px solid #d7d7d7",
    background: "white"
  },
  input: {
    padding: "0rem 2rem ",
    flexGrow: 1,
    minHeight: 50
  },
  message: {
    padding: "6px 6px",
    width: "100%",
    border: "none",
    "&:focus": {
      outline: "none"
    }
  },
  title: {
    padding: "14px",
    background: "white",
    borderRadius: "3px",
    fontSize: "16px",
    fontWeight: 400
  },
  TopBoxChat: {
    display: "flex",
    alignItems: "center",
    background: "white",
    padding: "6px 12px",
    zIndex: "100"
  }
}));

const userStyled = makeStyles({
  chat: {
    background: props => (props.author ? Blue[200] : "white"),
    padding: "8px",
    marginLeft: "10px",
    boxShadow: "0px 3px 10px rgba(0,0,0,.08)"
  },
  avatar: {
    width: "30px",
    height: "30px"
  },
  message: {
    fontWeight: 400,
    maxWidth: "350px",
    fontSize: "14px"
  }
});

const User = function(props) {
  const classes = userStyled(props);
  React.useEffect(() => {
    const element = document.getElementById("box-chat");
    element.scrollTop = element.scrollHeight;
  });
  return (
    <Box
      m="2rem 0"
      display="flex"
      alignItems="flex-start"
      justifyContent={props.author ? "flex-end" : ""}>
      <Avatar
        className={classes.avatar}
        //  src={props.user.avatar}
      />
      <Box borderRadius="3px" className={classes.chat}>
        <Typography className={classes.message} variant="body1">
          Nội dung tin nhắn đây nè chứ đâu Nội dung tin nhắn đây nè chứ đâu Nội
        </Typography>
      </Box>
    </Box>
  );
};

const ListUser = function(props) {
  const classes = useStyles();
  const message = React.useRef("");
  const onEditText = () => {
    // console.log(message.current.value);
  };
  return (
    <Box className={classes.card} borderRadius="3px" boxShadow={3}>
      <Box boxShadow={1} className={classes.TopBoxChat}>
        <Avatar className={classes.avatar} src={props.value.user.avatar} />
        <Typography className={classes.title} component="h4">
          {props.value.user.name}
        </Typography>
        <div className="ml-auto d-flex align-items-center">
          <Time />
          <Action />
        </div>
      </Box>

      <Box className={classes.content} id="box-chat">
        <User author />
        <User />
        <User author />
      </Box>
      <Box boxShadow={1} className={classes.chatbox}>
        <Box display="flex" p="0rem 2rem">
          <IconButton>
            <TagFacesIcon />
          </IconButton>
          <IconButton>
            <AddPhotoAlternateIcon />
          </IconButton>
          <IconButton>
            <TagFacesIcon />
          </IconButton>
          <IconButton>
            <TagFacesIcon />
          </IconButton>
        </Box>
        <Box display="flex" borderTop="1px solid #d7d7d7">
          <textarea
            aria-label="maximum height"
            placeholder="Nhập tin nhắn gởi đi"
            rows={2}
            className={classes.message}
            ref={message}
            onChange={onEditText}></textarea>
        </Box>
      </Box>
    </Box>
  );
};

export default ListUser;
