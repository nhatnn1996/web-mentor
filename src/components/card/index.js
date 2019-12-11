import React from "react";
import CurrencyIcon from "../../components/icon/currency";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { replaceURL } from "../../service/helper";
import { URLIMG } from "../../service/config";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0px 4px 18px rgba(0,0,0,.08)",
    position: "relative"
  },
  media: {
    height: 140,
    position: "relative",
    paddingTop: "calc( 1.5/3*100% )",
    "& img": {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textEllipsis: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    color: "grey"
  },
  marginAuto: {
    marginLeft: "auto"
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 4px"
  },
  currency: {
    position: "absolute",
    top: 10,
    right: 0,
    zIndex: 10,
    background: "white",
    borderRadius: "3px 0px 0px 3px",
    padding: "2px 6px"
  },
  status: {
    width: 10,
    height: 10,
    background: props => (props.value.status === "online" ? "green" : "red"),
    borderRadius: "50%"
  }
});

export default function MediaCard(props) {
  const classes = useStyles(props);
  const { value } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          to={"/profile/" + replaceURL(value.name) + "/" + value.id}
          className="text-dark">
          <div className={classes.currency}>
            <CurrencyIcon />
            <span className="ml-1"> {value.mentor.cost}</span>
          </div>
          <CardMedia
            className={classes.media}
            image={URLIMG + value.avatar}
            title="Contemplative Reptile"
          />
          <CardContent className="px-3 py-4">
            <div className={classes.title}>
              {value.name}
              <div className={classes.status}></div>
            </div>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.textEllipsis}>
              {value.mentor.description}
              ajshdkas kdas kdahsk dask ká kdsak dkas kdjask jdaksj dkajshk
              jdhaskj hdkasjh kdjahsk daksj hkdjahsk djhask hdkasj kdjhsak
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
