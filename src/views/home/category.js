import React from "react";
import Swiper from "react-id-swiper";
import { makeStyles } from "@material-ui/core/styles";
import "swiper/css/swiper.css";

function Categorys(props) {
  return (
    <div>
      <h4 className="font-weight-bold">Các chuyên ngành hot</h4>
      <p className="py-2 mb-0">
        Các chuyên ngành hot của trường. Nhiều sự lựa chọn cho công việc sau này
      </p>
      <div className="d-flex">
        <Carousel />
      </div>
    </div>
  );
}

function Carousel(props) {
  const params = {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
    }
  };
  return (
    <Swiper {...params} className="py-5">
      <div>
        <Item
          title="Khối công nghệ thông tin"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
        />
      </div>
      <div>
        <Item
          title="Khối ngành khách sạn"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg"
        />
      </div>
      <div>
        <Item
          title="Khối ngành đồ họa"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-photo/pro-photographer-desk_1426-1770.jpg"
        />
      </div>
      <div>
        <Item
          title="Marketing digital"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-psd/hands-taking-out-sheet-mock-up_23-2148365818.jpg"
        />
      </div>
      <div>
        <Item
          title="Khối ngành đồ họa"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-photo/image-creative-graphic-designer-working-color-selection-drawing-graphics-tablet_28283-898.jpg"
        />
      </div>
      <div>
        <Item
          title="Khối ngành du lịch"
          content="Nhiều chuyên ngành như thiết kế website ..."
          src="https://image.freepik.com/free-photo/toy-plane-near-travel-supplies_23-2147746341.jpg"
        />
      </div>
    </Swiper>
  );
}

const useStyled = makeStyles({
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  },
  wrap: {
    borderRadius: "8px",
    boxShadow: "0px 4px 20px rgba(0,0,0,.08)",
    margin: "5px 0 25px 0",
    overflow: "hidden"
  },
  title: {
    padding: "10px",
    fontWeight: "bold"
  }
});

function Item(props) {
  const classes = useStyled();
  return (
    <div className={classes.wrap}>
      <img className={classes.img} src={props.src} alt="" />
      <div className={classes.title}>
        <p className="mb-0">{props.title}</p>
        <p className="font-weight-light text-truncate mb-1">{props.content} </p>
      </div>
    </div>
  );
}

export default Categorys;
