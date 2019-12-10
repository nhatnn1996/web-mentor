import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ProfileIcon from "../../icon/profile";
import LogoutIcon from "../../icon/logout";
import SettingIcon from "../../icon/setting";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { URLIMG } from "../../../service/config";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative"
  },
  div: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  },
  menu: {
    position: "absolute",
    padding: "16px",
    background: "white",
    top: "150%",
    right: 0,
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.4)",
    borderRadius: "3px"
  },
  info: {
    display: "flex",
    margin: "auto"
  }
}));

export default function ClickAway(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.wrapper}>
        <div className={classes.info} onClick={handleClick}>
          <span className="mb-0 d-inline-flex align-items-center mr-3">
            {props.info.name}
          </span>
          <img
            src={URLIMG + props.info.avatar}
            className="size-sm shadow rounded-circle d-block pointer"
            alt="avatar"
          />
          <ArrowDropDown className="pointer" size="sm" />
        </div>
        {open ? (
          <div className={classes.menu}>
            <ul>
              <li>
                <Link
                  to="/profile"
                  className="text-dark text-decoration-none text-nowrap">
                  <span className="svg mr-3">
                    <ProfileIcon />
                  </span>
                  Cá nhân
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/edit"
                  className="text-dark text-decoration-none text-nowrap">
                  <span className="svg mr-3">
                    <SettingIcon />
                  </span>
                  Cập nhật thông tin
                </Link>
              </li>

              <li className="pointer mt-3 text-nowrap" onClick={props.logout}>
                <span className="svg mr-3">
                  <LogoutIcon />
                </span>
                Đăng xuất
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
